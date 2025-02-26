import FullScreenMedia from "@/components/FullScreenMedia";
import HorizontalMarque from "@/components/HorizontalMarque";
import NewArrivals from "@/components/NewArrivals";
import PinnedCards from "@/components/PinnedCards";
import Testimony from "@/components/Testimonials";

export default function HomePage() {
  return (
         <div className="relative -top-[4rem] -mb-[4rem]">
            <FullScreenMedia/>
            <NewArrivals/>
            <PinnedCards/>
            <HorizontalMarque/>
            <Testimony/>
         </div>
  );
}
