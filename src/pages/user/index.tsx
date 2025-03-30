import UserAreaPage from '@/Containers/UserArea';
import ProtectedRoute from '@/components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
export default function User() {
  return (
    <>
      <UserAreaPage />
      <ToastContainer />
    </>
  );
}
