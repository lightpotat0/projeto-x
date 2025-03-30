import RecoveryPasswordPage from '@/Containers/RecoverPassword';
import { UnauthenticatedRoute } from '@/components/UnauthenticatedRoute';

export default function Login() {
  return (
    <UnauthenticatedRoute redirectPath="/user">
      <RecoveryPasswordPage />
    </UnauthenticatedRoute>
  );
}
