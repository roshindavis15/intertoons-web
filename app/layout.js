import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderData } from "@/lib/airtable";
import StyledJsxRegistry from "@/lib/registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Intertoons - AI Powered Digital Solutions",
  description: "We Build Intelligent Digital Solutions That Drive Real Growth. AI Development, Automations, Shopify, and more.",
};

export default async function RootLayout({ children }) {
  const navItems = await getHeaderData();

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledJsxRegistry>
          <Header navItems={navItems} />
          <main>{children}</main>
          <Footer />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
