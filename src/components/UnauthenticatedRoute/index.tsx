import { ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';

interface UnauthenticatedRouteProps {
  children: ReactNode;
  redirectPath: string;
}

export const UnauthenticatedRoute = ({
  children,
  redirectPath,
}: UnauthenticatedRouteProps & { redirectPath: string }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(redirectPath);
    }
  }, [isAuthenticated, redirectPath, router]);

  return <>{!isAuthenticated ? children : null}</>;
};
