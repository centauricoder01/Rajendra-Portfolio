import "./Home.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="maincenterdiv">
        <div className="Alldetails">
          <h1>HEY, I'M RAJENDRA PATEL</h1>
          <p>
            A Result-Oriented
            <span style={{ color: "#0c90c8" }}> Full stack Developer, </span>
            building and managing Websites and Web Applications that leads to
            the success of the overall product.
          </p>
          <CTA />
          <HeaderSocial />
        </div>
      </div>
    </section>
  );
};
