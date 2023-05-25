import "./globals.css";
import Header from "./components/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dish Discovery",
  description:
    "Discover a world of culinary inspiration with Dish Discovery, the ultimate recipe app. Explore a vast collection of delectable recipes from around the globe, catering to various cuisines and dietary preferences. With step-by-step guidance, intuitive navigation, and personalized features like saving favorites and creating menus, Dish Discovery makes cooking a breeze.",
  keywords:
    "recipe app, culinary exploration, cooking insipiration, food enthusiasts, recipe collection, global suisines, seasonal specialties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        
        <main>{children}</main>
        </body>
    </html>
  );
}
