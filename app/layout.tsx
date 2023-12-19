import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        data-new-gr-c-s-check-loaded="14.1146.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
