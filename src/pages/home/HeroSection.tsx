import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 place-content-center h-[calc(100vh-64px)]">
      <div>
        <h1 className="text-7xl font-bold">
          <span className="text-gray">My Son.</span>
          <br />
          <span>His name ABDI</span>
        </h1>
        <p className="py-5 max-w-[50ch] text-gray">
            My son name is <span className="text-dark-gray font-bold">abdi</span>. He is a good boy.
            My son name is abdi. He is a good boy.
            My son name is abdi. He is a <span className="text-dark-gray font-bold">good</span> boy.
            My son <span className="text-dark-gray font-bold">name</span>is abdi. He is a good boy.
        </p>
        <Button>Details Here</Button>
      </div>
      <div>
        <img className="-rotate-[35deg] w-[545px]" src={"https://assets.teenvogue.com/photos/5901173230d229249cb49978/master/w_1080,h_720,c_limit/baby-lede.jpg"} alt="img" />
      </div>
    </Container>
  );
};

export default HeroSection;
