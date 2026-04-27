import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Chukwudi Oshilim | Full Stack & QA Security Engineer",
  description:
    "Portfolio of Chukwudi Oshilim — Full Stack Developer and QA Security & Tech Lead at BioAro. Building scalable web apps, secure systems, and 3D experiences.",
  keywords: ["Full Stack Developer", "QA Security", "Tech Lead", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Chukwudi Oshilim" }],
  openGraph: {
    title: "Chukwudi Oshilim | Full Stack & QA Security Engineer",
    description:
      "Full Stack Developer and QA Security Tech Lead. Building scalable, secure web applications.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwudi Oshilim | Full Stack & QA Security Engineer",
    description: "Full Stack Developer and QA Security Tech Lead.",
  },
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
