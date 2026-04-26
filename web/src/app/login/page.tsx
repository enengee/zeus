'use client';

import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) console.error('OAuth error:', error.message);
  }

  return (
    <main>
      <h1>Sign in</h1>
      <button type="button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </main>
  );
}
