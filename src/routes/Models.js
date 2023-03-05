import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ModelsImg from "../assets/Purple_Poring.png";
function Models() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ModelsImg}
        title="My 3D Models"
        btnClass="hide"
      />
    </>
  );
}

export default Models;
