import { Inter } from '@next/font/google'
import { use } from "react";
import Header from '../components/Nav/header';
import './global.css';

const inter = Inter({subsets: ["latin-ext"]});

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
    <html>
      <head></head>
      <body>
        <Header menuItems={menu.menuItems}/>
        {children}
      </body>
    </html>
  )
}
