/**
 * JSON body accepted by `POST /api/contact`.
 *
 * The route responds with `{ ok: boolean }`.
 *
 * `company` is a honeypot field: it is rendered invisibly in the quote form
 * and left empty by humans. Submissions where `company` is a non-empty string
 * should be silently discarded (still responding `{ ok: true }`) as bot spam.
 */
export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
}
