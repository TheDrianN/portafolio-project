import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheDrianN",
  description: "Portafolio de Adriann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${firaCode.variable} antialiased `}>
        <header className="sticky top-0 z-50 bg-[#171717] w-full flex justify-between items-center px-20 py-4">
          <div>
            <h1 className="font-bold text-xl hover:text-blue-300 transition" >TheDrianN</h1>
          </div>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
