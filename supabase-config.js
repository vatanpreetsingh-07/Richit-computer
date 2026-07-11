/* ============================================================
   SUPABASE CONFIGURATION – Richit Computer
   ============================================================
   INSTRUCTIONS:
   1. Go to https://supabase.com/ and create a free account
   2. Create a new project (choose any name & region)
   3. Go to Project Settings → API
   4. Copy "Project URL" and paste it as SUPABASE_URL below
   5. Copy "anon / public" key and paste it as SUPABASE_ANON_KEY
   6. See SUPABASE_SETUP.md for a complete step-by-step guide
   ============================================================ */

const SUPABASE_URL     = 'https://xhrfcoquxrdtugvbalgk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_upI0W8oi4TcFSlTEmkhsqw_HzkfgX_F';

/* ============================================================
   DO NOT EDIT BELOW THIS LINE
   ============================================================ */

window.supabaseDb    = null;
window.supabaseReady = false;

(function initSupabaseApp() {
  try {
    // Guard: skip if placeholders haven't been filled in
    if (!SUPABASE_URL || SUPABASE_URL === 'YOUR_SUPABASE_URL') {
      console.warn(
        '%c⚠️ Supabase not configured.' +
        ' Open supabase-config.js and replace the YOUR_... placeholders with your real credentials.' +
        ' The site will continue to work using localStorage until Supabase is set up.',
        'color: #F7C948; font-weight: bold; font-size: 13px;'
      );
      return;
    }

    // Guard: skip if Supabase SDK wasn't loaded (CDN blocked / offline)
    if (typeof supabase === 'undefined' || typeof supabase.createClient !== 'function') {
      console.warn('⚠️ Supabase SDK not loaded. Using localStorage fallback.');
      return;
    }

    // Create the Supabase client
    window.supabaseDb    = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseReady = true;

    console.log(
      '%c🟢 Supabase connected! All product/category changes will sync to the cloud database.',
      'color: #3ECFCF; font-weight: bold; font-size: 13px;'
    );
  } catch (err) {
    console.warn('⚠️ Supabase initialization error:', err.message, '— falling back to localStorage.');
    window.supabaseDb    = null;
    window.supabaseReady = false;
  }
})();
