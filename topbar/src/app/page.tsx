import FullScreenMedia from "@/components/FullScreenMedia";
import Header from "@/components/Header";
import HorizontalMarque from "@/components/HorizontalMarque";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[200vh]">
         <Header/>
         <div className="relative -top-[4rem]">
            <FullScreenMedia/>
            <NewArrivals/>
            <HorizontalMarque/>
            <div className="h-[100vh]">

            </div>
         </div>
    </div>
  );
}
