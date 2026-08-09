import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import "./Contact.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-page">
      
  <Helmet>
  <title>Contact Us | IUNU Developments</title>

  <meta
    name="description"
    content="Get in touch with IUNU Developments. Contact our team for real estate inquiries, projects, and development opportunities."
  />

  <link
    rel="canonical"
    href="https://iunu-eg.com/contact"
  />
</Helmet>
      <Navbar />

      <main>

        {/* =========================
            HERO
        ========================= */}

        <section className="contact-hero">
          <h1>Get In Touch</h1>
          <p>We're here to answer your queries.</p>
        </section>


        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <section className="contact-content">


          {/* =========================
              FORM SECTION
          ========================= */}

          <div className="contact-form-section">

            {!submitted ? (
              <>
                <h2>Visit Our Office</h2>

                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.currentTarget;

                    if (!form.checkValidity()) {
                      form.reportValidity();
                      return;
                    }

                    setSubmitted(true);
                  }}
                >

                  {/* =========================
                      FIRST NAME / LAST NAME
                  ========================= */}

                  <div className="form-row">

                    {/* First Name */}
<label htmlFor="firstName">First name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      minLength={2}
                      maxLength={30}
                      pattern="^[A-Za-z\u0600-\u06FF]+(?:[ '\u0600-\u06FF-][A-Za-z\u0600-\u06FF]+)*$"
                      title="Please enter a valid first name using letters only."
                      autoComplete="given-name"
                    />


                    {/* Last Name */}
<label htmlFor="lastName">First name</label>

                    <input
                    id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      minLength={2}
                      maxLength={30}
                      pattern="^[A-Za-z\u0600-\u06FF]+(?:[ '\u0600-\u06FF-][A-Za-z\u0600-\u06FF]+)*$"
                      title="Please enter a valid last name using letters only."
                      autoComplete="family-name"
                    />

                  </div>


                  {/* =========================
                      PHONE / EMAIL
                  ========================= */}

                  <div className="form-row">

                    {/* Phone */}
<label htmlFor="phone">First name</label>

                    <input
                    id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      pattern="^(01[0125][0-9]{8})$"
                      title="Please enter a valid Egyptian mobile number, e.g. 01012345678."
                      inputMode="numeric"
                      maxLength={11}
                      autoComplete="tel"
                    />


                    {/* Email */}
<label htmlFor="email">First name</label>

                    <input
                    id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      maxLength={100}
                      title="Please enter a valid email address."
                      autoComplete="email"
                    />

                  </div>


                  {/* =========================
                      MESSAGE
                  ========================= */}

                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    minLength={10}
                    maxLength={1000}
                    title="Please enter a message with at least 10 characters."
                  ></textarea>


                  {/* =========================
                      SUBMIT
                  ========================= */}

                  <button type="submit">
                    SEND MESSAGE
                  </button>

                </form>
              </>
            ) : (

              /* =========================
                  SUCCESS MESSAGE
              ========================= */

              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

                <h2>
                  Thank You!
                </h2>

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

          </div>


          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info-section">

            <h2>Follow Us Online</h2>

            <p className="contact-description">
              Connect with us on social media for updates.
            </p>


            {/* =========================
                CONTACT INFO
            ========================= */}

            <div className="contact-info-grid">


              {/* Phone */}

              <div className="info-item">

                <div className="info-icon">
                  ☎
                </div>

                <div>
                  <span>
                    17337
                  </span>
                </div>

              </div>


              {/* Email */}

              <div className="info-item">

                <div className="info-icon">
                  ✉
                </div>

                <div>
                  <span>
                    info@iunu-eg.com
                  </span>
                </div>

              </div>


              {/* Working Hours */}

              <div className="info-item">

                <div className="info-icon info-icon-building">

                  <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path d="M18 54V20L32 12L46 20V54" />

                    <path d="M12 54H52" />

                    <path d="M24 28H28" />
                    <path d="M36 28H40" />

                    <path d="M24 36H28" />
                    <path d="M36 36H40" />

                    <path d="M24 44H28" />
                    <path d="M36 44H40" />

                    <path d="M29 54V44H35V54" />

                  </svg>

                </div>

                <div>

                  <span>
                    Saturday - Thursday
                  </span>

                  <span>
                    11:00 AM to 07:00 PM
                  </span>

                </div>

              </div>


              {/* Address */}

              <div className="info-item">

                <div className="info-icon info-icon-home">

                  <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path d="M20 30L32 18L44 30" />

                    <path d="M23 28V47H41V28" />

                    <path d="M29 47V36H35V47" />

                  </svg>

                </div>

                <div>

                  <span>
                    Plot No. 306 307, Galaxy Mall,
                    South 90th Street, second floor,
                    Fifth Settlement, New Cairo,
                    Egypt
                  </span>

                </div>

              </div>

            </div>


            {/* =========================
                SOCIAL MEDIA
            ========================= */}

            <div className="social-section">

              <span>
                Social Network
              </span>


              <div className="social-links">


                {/* Facebook */}

                <a
                  href="https://www.facebook.com/iunudevelopments"
                  aria-label="Facebook"
                  className="social-link"
                >

                  <svg viewBox="0 0 24 24">

                    <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1z" />

                  </svg>

                </a>


                {/* Instagram */}

                <a
                  href="https://www.instagram.com/iunu.eg/?hl=en"
                  aria-label="Instagram"
                  className="social-link"
                >

                  <svg viewBox="0 0 24 24">

                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      className="fill-icon"
                    />

                  </svg>

                </a>


                {/* WhatsApp */}

                <a
                  href="whatsapp://send?phone=201091218088"
                  aria-label="WhatsApp"
                  className="social-link"
                >

                  <svg viewBox="0 0 24 24">

                    <path d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z" />

                    <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.5.7c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.1-.2-2.3-.9-3.4-2-1-1-1.7-2.2-2-3.4-.1-.6.1-1.1.4-1.5z" />

                  </svg>

                </a>


                {/* Email */}

                <a
                  href="mailto:info@iunu-eg.com"
                  aria-label="Email"
                  className="social-link email"
                >

                  <svg viewBox="0 0 24 24">

                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path d="m4 7 8 6 8-6" />

                  </svg>

                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </div>
  );
}

export default Contact;