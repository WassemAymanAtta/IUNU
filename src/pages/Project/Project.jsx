import { useState } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import "./Project.css";
import Footer from "../../components/layout/Footer/Footer";
import { Helmet } from "react-helmet-async";
function Project() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    
    <div className="project-page">

  <Helmet>
  <title>Projects | IUNU Developments</title>

  <meta
    name="description"
    content="Explore IUNU Developments projects and discover thoughtfully designed spaces built with quality, purpose, and long-term value."
  />

  <meta
    name="keywords"
    content="IUNU projects, real estate projects, property development, Egypt, New Cairo"
  />

  <link
    rel="canonical"
    href="https://iunu-eg.com/project"
  />
</Helmet>
      <Navbar />

      <main>

        {/* Hero */}
        <section className="project-hero">
          <div className="project-hero-content">
            <h1>Enduring Spaces for Tomorrow</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="project-intro">
          <h2>Thoughtful Development</h2>
        </section>

        {/* Features */}
        <section className="project-features">

          <div className="project-feature">
            <h3>Legacy Inspired Design</h3>
            <p>
              Our projects prioritize community needs and sustainability.
            </p>
          </div>

          <div className="project-feature">
            <h3>Confident Project Delivery</h3>
            <p>
              Experience reliable development with a focus on quality and integrity.
            </p>
          </div>

          <div className="project-feature">
            <h3>Enduring Spaces</h3>
            <p>
              Creating impactful spaces that reflect purpose and longevity.
            </p>
          </div>

        </section>

        {/* Contact / Newsletter */}
        <section className="project-contact">

          {!submitted ? (
            <>
              <h2>Get in Touch Today</h2>

              <p>
                Reach out to us to discuss your real estate needs.
              </p>

              <form
                className="project-newsletter"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Email"
                  required
                />

                <button type="submit">
                  SIGN UP
                </button>
              </form>
            </>
          ) : (
            <div className="success-message">

              <div className="success-icon">
                ✓
              </div>

              <h2>Thank You!</h2>

              <p className="success-main">
                Your request has been submitted successfully.
              </p>

              <p className="success-description">
                We have received your request successfully.
                Our team will contact you soon.
              </p>

              <button
                className="success-button"
                onClick={() => setSubmitted(false)}
              >
                SEND ANOTHER REQUEST
              </button>

            </div>
          )}

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Project;