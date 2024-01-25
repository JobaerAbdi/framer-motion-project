import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import Container from "@/components/ui/Container";

const Home = () => {
    return (
        <Container>
            <HeroSection/>
            <AboutUsSection/>
        </Container>
    );
};

export default Home;