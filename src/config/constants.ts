export const LINKEDIN_CONFIG = {
  clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
  redirectUri: import.meta.env.VITE_LINKEDIN_REDIRECT_URI,
  scope: 'r_liteprofile r_emailaddress r_basicprofile',
  state: crypto.randomUUID(),
  responseType: 'code'
};