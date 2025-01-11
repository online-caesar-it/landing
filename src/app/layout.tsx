import "./_styles/globals.css";
import MainLayout from "@/widgets/layouts/ui/main-layout";
import { Providers } from "./_providers/providers";
import localFont from "next/font/local";
const introFriday = localFont({
  src: "../../public/fonts/IntroFriday.ttf",
  variable: "--font-intro-friday",
  display: "swap",
});
const grecoRoman = localFont({
  src: "../../public/fonts/GRECOromanLubedWrestling.ttf",
  variable: "--font-greco-roman",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${introFriday.variable} ${grecoRoman.variable}`}
    >
      <body className={"bg-grey-85"}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
