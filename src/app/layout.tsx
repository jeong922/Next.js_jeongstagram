import Navbar from '@/components/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='w-full mx-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-800'>
        <AuthContext>
          <header className='sticky top-0 z-10 bg-white border-b'>
            <Navbar />
          </header>
          <main className='flex justify-center w-full min-h-full bg-neutral-50'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
