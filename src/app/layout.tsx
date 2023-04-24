import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import { Metadata } from 'next';
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Jeongstagram',
    template: 'Jeongstagram | %s',
  },
  description: 'Jeongstagram Photos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='w-full mx-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-800 bg-neutral-50'>
        <AuthContext>
          <header className='sticky top-0 z-10 bg-white border-b'>
            <Navbar />
          </header>
          <main className='flex justify-center w-full max-w-screen-xl mx-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
