interface ShopLayoutProps {
  children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <>
      {/* TODO: Add navbar */}
      {children}
    </>
  );
}
