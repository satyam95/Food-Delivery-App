import CTAForMobileApp from "@/components/CTAForMobileApp";
import CityCollectionBlock from "@/components/CityCollectionBlock";
import JombortoneBanner from "@/components/JombotronBanner";
import OptionsFAQ from "@/components/OptionsFAQ";
import VenueCategoryBlock from "@/components/VenueCategoryBlock";

export default function Home() {
  return (
    <>
      <JombortoneBanner />
      <VenueCategoryBlock />
      <CityCollectionBlock />
      <CTAForMobileApp />
      <OptionsFAQ />
    </>
  );
}