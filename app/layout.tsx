import { Inter } from '@next/font/google'
import { use } from "react";
import Header from '../components/Nav/header';
import './global.css';

const inter = Inter({weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ["latin-ext"]});

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header menuItems={menu.menuItems}/>
        {children}
      </body>
    </html>
  )
}
