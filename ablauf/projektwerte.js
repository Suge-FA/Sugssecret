// Das eigene Projekt SugesFandA und sein öffentlicher Schlüssel.
// Server-Schlüssel bleiben ausschließlich in den Geheimnissen der eigenen Edge Functions.
export const faProjekt = Object.freeze({
  unternehmen: 'F&A Sales Consulting',
  kurzname: 'F&A Sales Consulting',
  postfach: 'info@fasalesconsulting.com',
  telefon: '+49 4442 9499987',
  webadresse: new URL('../', import.meta.url).href.replace(/\/$/, ''),
  datenadresse: 'https://vexjcjrtpbnggfspxyqu.supabase.co',
  oeffentlicherSchluessel: 'sb_publishable_PV1T2kdO5pBCVPCjJS3xMg_M_1ANgxJ',
});

export function faVerbindungBereit() {
  if (!faProjekt.datenadresse || !faProjekt.oeffentlicherSchluessel) return false;
  try {
    const faZiel = new URL(faProjekt.datenadresse);
    return faZiel.protocol === 'https:' && faZiel.hostname.endsWith('.supabase.co')
      && /^sb_publishable_[A-Za-z0-9_-]+$/.test(faProjekt.oeffentlicherSchluessel);
  } catch { return false; }
}
