import { Poppins } from '@next/font/google'
import { use } from "react";
import Navbar from '../components/Navigation/navbar';
import './global.css';

const poppins = Poppins({weight: "400", subsets: ['devanagari']});

async function getMenuItems() {
    let menu = await fetch("http://localhost:3000/api/globals/menu");

    return menu.json();
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let menu = use(getMenuItems());

  return (
    <html className={poppins.className}>
      <head></head>
      <body>
        <Navbar menuItems={menu.menuItems}/>
        {children}
      </body>
    </html>
  )
}
