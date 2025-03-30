import RegisterPage from '@/Containers/Register';
import { UnauthenticatedRoute } from '@/components/UnauthenticatedRoute';

export default function Register() {
  return (
    <UnauthenticatedRoute redirectPath="/user">
      <RegisterPage />
    </UnauthenticatedRoute>
  );
}
