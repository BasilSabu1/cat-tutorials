import Header from "@/app/components/header/Header";
import BannerPage from "@/app/components/banner/Banner";
import Review from "@/app/components/review/Review";
import Coursecomparison from "@/app/components/coursecomparision/Course";
import Faq from "@/app/components/faq/Faq";


export default function Home() {
  return (
  <div className="">
   <Header/>
   <BannerPage/>
   <Review/>
   <Coursecomparison/>
   <Faq/>
  </div>
  );
}
