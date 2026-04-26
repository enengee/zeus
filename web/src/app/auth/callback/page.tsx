'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') router.replace('/');
    });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace('/');
    });

    return () => sub.subscription.unsubscribe();
  }, [router]);

  return (
    <main>
      <p>Signing you in…</p>
    </main>
  );
}
