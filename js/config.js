// Configuration file for different environment.
// The links are for the backend(API).
const API_URLS = {
    'dev': 'http://127.0.0.1:5000/',
    'production': 'production-link-here'
}

// The current environment you are currently in.
// Before pushing to production(netlify), update
// the CURRENT_ENV below to production.
const CURRENT_API_URL = 'dev';

// Final Link for your backend API url.
const API_LINK = API_URLS[CURRENT_API_URL];