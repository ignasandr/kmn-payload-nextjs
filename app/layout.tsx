import { Poppins } from '@next/font/google'
import Navbar from './navbar';
import './global.css';

const poppins = Poppins({weight: "400", subsets: ["latin"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={poppins.className}>
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
