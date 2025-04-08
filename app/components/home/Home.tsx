import Header from "@/app/components/header/Header";
import BannerPage from "@/app/components/banner/Banner";
import Review from "@/app/components/review/Review";
import Coursecomparison from "@/app/components/coursecomparision/Course";
import Faq from "@/app/components/faq/Faq";
import Comparison from "@/app/components/comparison/Comparison";
import Faculty from "@/app/components/faculty/Faculty";
import Benefits from "@/app/components/benefits/Benefits";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerPage />
      <Benefits />
      <Faculty />
      <Comparison />
      <Review />
      <Coursecomparison />
      <Faq />
      <Footer />
    </div>
  );
}
