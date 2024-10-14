import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Open_Sans, Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--body-font-family',
  weight: ['300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--header-font-family',
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.variable} ${openSans.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
