import HeroSection from "./components/HeroSection";
import SpecializedUnits from "./components/Departments";
import Specialists from "./components/SpecialistCard"
import ProcessSection from "./components/ProcessSection";

export default function Home() {
    return (
        <>
       <HeroSection/>
       <SpecializedUnits />
       <Specialists/>
       <ProcessSection/>
        </>
    );
}