import NewsletterSection from "@/features/products/component/Newsletter";
import DealsBanner from "../component/DealsBanner";
import FeaturedProducts from "../component/FeaturedProducts";
import OurCategoreis from "../component/OurCategoreis";
import PromoBanner from "../component/PromoBanner";
import Slider from "../component/slider";

export default function HomeSCreen(){
  return <>
<Slider/>
<PromoBanner/>
<OurCategoreis/>
<DealsBanner/>
<FeaturedProducts/>
<NewsletterSection/>
  </>
}