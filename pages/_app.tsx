import type { AppProps } from 'next/app';
import { CustomNextPage } from '../src/shared/interfaces/layout';
import LayoutAuthComponent from '../src/shared/presentation/layouts/LayoutAuthComponent';
import LayoutComponent from '../src/shared/presentation/layouts/LayoutComponent';
import '../styles/globals.css';

type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const Layout = Component.useAuthLayout
    ? LayoutAuthComponent
    : LayoutComponent;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
