import { booking } from '../config/site';
import { LANG_META, type Lang } from '../i18n/config';

export interface BookingQuery {
  lang: Lang;
  /** Fecha de llegada en formato YYYY-MM-DD. */
  checkIn?: string;
  /** Fecha de salida en formato YYYY-MM-DD. */
  checkOut?: string;
  adults?: number;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function isIsoDate(value: string | undefined): value is string {
  if (!value || !ISO_DATE.test(value)) return false;
  const d = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(value);
}

/**
 * Construye la URL del motor de reservas SiteMinder con los mismos
 * parámetros que envía el widget de la web actual.
 * Si las fechas no son válidas o la salida no es posterior a la llegada,
 * se omiten para que el motor muestre su propio calendario.
 */
export function buildBookingUrl({ lang, checkIn, checkOut, adults }: BookingQuery): string {
  const url = new URL(booking.baseUrl);
  url.searchParams.set('locale', LANG_META[lang].bookingLocale);
  url.searchParams.set('referrer', booking.referrer);

  if (isIsoDate(checkIn) && isIsoDate(checkOut) && checkOut > checkIn) {
    url.searchParams.set('check_in_date', checkIn);
    url.searchParams.set('check_out_date', checkOut);
  }
  if (adults !== undefined && Number.isInteger(adults) && adults >= 1 && adults <= booking.maxAdults) {
    url.searchParams.set('number_adults', String(adults));
  }
  return url.toString();
}
