import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/sections/navbar/Navbar";
import Footer from "@/components/sections/footer/Footer";

const dm_sans = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Clinovo",
  description: "Get all your cares here",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dm_sans.variable} h-full antialiased`}
    >
      <body className={`min-h-full bg-bg-secondary flex flex-col ${dm_sans.className}`}>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
