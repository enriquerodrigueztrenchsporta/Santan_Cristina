import { describe, expect, it } from 'vitest';
import { buildBookingUrl, isIsoDate } from '../../src/lib/booking';

const BASE = 'https://direct-book.com/properties/hotelsantacristinapetitspadirect';

describe('buildBookingUrl', () => {
  it('apunta al motor SiteMinder del hotel con idioma y referrer', () => {
    const url = new URL(buildBookingUrl({ lang: 'es' }));
    expect(`${url.origin}${url.pathname}`).toBe(BASE);
    expect(url.searchParams.get('locale')).toBe('es');
    expect(url.searchParams.get('referrer')).toBe('canvas');
    expect(url.searchParams.has('check_in_date')).toBe(false);
  });

  it('usa el locale de cada idioma', () => {
    expect(new URL(buildBookingUrl({ lang: 'en' })).searchParams.get('locale')).toBe('en');
    expect(new URL(buildBookingUrl({ lang: 'fr' })).searchParams.get('locale')).toBe('fr');
  });

  it('envía fechas y adultos en el formato del widget original', () => {
    const url = new URL(buildBookingUrl({ lang: 'es', checkIn: '2026-12-20', checkOut: '2026-12-23', adults: 2 }));
    expect(url.searchParams.get('check_in_date')).toBe('2026-12-20');
    expect(url.searchParams.get('check_out_date')).toBe('2026-12-23');
    expect(url.searchParams.get('number_adults')).toBe('2');
  });

  it('descarta fechas incoherentes o inválidas', () => {
    const inverted = new URL(buildBookingUrl({ lang: 'es', checkIn: '2026-12-23', checkOut: '2026-12-20' }));
    expect(inverted.searchParams.has('check_in_date')).toBe(false);
    const invalid = new URL(buildBookingUrl({ lang: 'es', checkIn: '2026-02-30', checkOut: '2026-03-02' }));
    expect(invalid.searchParams.has('check_in_date')).toBe(false);
  });

  it('descarta un número de adultos fuera de rango', () => {
    expect(new URL(buildBookingUrl({ lang: 'es', adults: 0 })).searchParams.has('number_adults')).toBe(false);
    expect(new URL(buildBookingUrl({ lang: 'es', adults: 11 })).searchParams.has('number_adults')).toBe(false);
  });
});

describe('isIsoDate', () => {
  it('valida fechas reales', () => {
    expect(isIsoDate('2026-01-31')).toBe(true);
    expect(isIsoDate('2026-02-29')).toBe(false);
    expect(isIsoDate('31/01/2026')).toBe(false);
    expect(isIsoDate(undefined)).toBe(false);
  });
});
