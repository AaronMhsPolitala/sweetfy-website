import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sweetfy - Pasti Ketagihan Dalam 1 Gigitan",
  description: "Es Kulkul dan Es Teh Sweetfy, teman manis dan segar untuk menemani setiap momen kamu. Brand makanan dan minuman favorit mahasiswa.",
  keywords: ["Sweetfy", "Es Kulkul", "Es Teh", "Es Teh Lychee", "Camilan Mahasiswa", "Bazar Kampus", "Pelaihari"],
  openGraph: {
    title: "Sweetfy - Pasti Ketagihan Dalam 1 Gigitan",
    description: "Es Kulkul dan Es Teh Sweetfy, teman manis dan segar untuk menemani setiap momen kamu.",
    url: "https://sweetfy.netlify.app",
    siteName: "Sweetfy",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Geist:wght@400;500;600&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
