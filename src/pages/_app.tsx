import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-style';
import { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  );
}
