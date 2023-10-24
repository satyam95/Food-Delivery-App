import CTAForMobileApp from "@/components/CTAForMobileApp";
import CityCollectionSquareBlock from "@/components/CityCollectionSquareBlock";
import JombortoneBanner from "@/components/JombotronBanner";
import OptionsFAQ from "@/components/OptionsFAQ";
import VenueCategoryBlock from "@/components/VenueCategoryBlock";

export default function Home() {
  return (
    <>
      <JombortoneBanner />
      <VenueCategoryBlock />
      <CityCollectionSquareBlock />
      <CTAForMobileApp />
      <OptionsFAQ />
    </>
  );
}