import Footer from "@/components/Footer";
import ListingHeader from "@/components/ListingHeader";

export default function ListingLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <ListingHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
