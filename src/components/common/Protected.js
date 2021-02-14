import { useEffect } from 'react';

import { useRouter } from 'next/router';

import useAuth from 'src/hooks/useAuth';

function Protected({ children }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, []);

  if (!isAuthenticated) return null;
  return <>{children}</>;
}

export default Protected;
