import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/RMSPoring.png";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="My 3D Models"
        buttonText="Blender Models"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
