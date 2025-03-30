import LoginPage from '@/Containers/Login';
import { UnauthenticatedRoute } from '@/components/UnauthenticatedRoute';

export default function Login() {
  return (
    <UnauthenticatedRoute redirectPath="/user">
      <LoginPage />
    </UnauthenticatedRoute>
  );
}
