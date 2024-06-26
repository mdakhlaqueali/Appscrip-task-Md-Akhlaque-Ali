import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Your Brand</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover our products." />
        <meta name="keywords" content="shopping, clothes, electronics, silver, gold, jewellery, ring, hardisk, ssd, 4ktv"/>
        <meta name="author" content="Your Brand" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
