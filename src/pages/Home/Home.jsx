import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import LegacySection from "../../components/home/LegacySection/LegacySection";"../../components/home/LegacySection/LegacySection";
import Development from "../../components/home/Development/Development";
import QuoteForm from "../../components/home/QuoteForm/QuoteForm";

import { Helmet } from "react-helmet-async";import Footer from "../../components/layout/Footer/Footer";
function Home() {
  return (
    <div className="home-page">

  <Helmet>
  <title>IUNU | Real Estate Development</title>

  <meta
    name="description"
    content="IUNU Developments creates thoughtfully designed real estate spaces with quality, sustainability, and lasting value."
  />

  <meta
    name="keywords"
    content="IUNU, real estate development, Egypt, New Cairo, Fifth Settlement"
  />

  <link
    rel="canonical"
    href="https://iunu-eg.com/"
  />
</Helmet>
      <Navbar />

      <main>
        <Hero />
                <LegacySection />
                <Development/>
                <QuoteForm/>
                <Footer/>
      </main>

    </div>
  );
}

export default Home;