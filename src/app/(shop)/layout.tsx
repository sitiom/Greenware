import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Carousel from "./home/components/Carousel";
interface ShopLayoutProps {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
