import Hero from "@/components/Hero";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
     

        {children}
      </body>
    </html>
  );
}
