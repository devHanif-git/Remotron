import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Remotron - The Remote That Controls The Future",
  description: "Remotron is an intelligent robot transforming how you control your world. From smart homes to futuristic gadgets, the future starts here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-darkBackground text-white font-poppins">
        <Navbar />
        <main>{children}</main>
        <footer className="py-4 text-center text-gray-500">
          &copy; 2024 Remotron made by devHanif. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
