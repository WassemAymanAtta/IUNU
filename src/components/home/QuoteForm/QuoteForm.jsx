import { useState } from "react";
import "./QuoteForm.css";

function QuoteForm() {
  const initialFormData = {
    name: "",
    phone: "",
    city: "",
    email: "",
    project: "",
    whatsapp: "",
    spaceType: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Temporary until backend is connected
    console.log("Quote Request:", formData);

    setSubmitted(true);
  };

  const handleAnotherRequest = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return (
    <section className="quote-section">

      <div className="quote-container">

        {!submitted ? (
          <>
            {/* =========================
                HEADER
            ========================= */}

            <div className="quote-header">

              <h2>Request A Quote</h2>

              <p>
                Tell us what you are looking for and our team
                will get in touch with you shortly.
              </p>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <form
              className="quote-form"
              onSubmit={handleSubmit}
              noValidate={false}
            >

              {/* =========================
                  NAME / PHONE
              ========================= */}

              <div className="quote-row">

                <div className="quote-field">

                  <label htmlFor="quote-name">
                    Name
                  </label>

                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={60}
                    pattern="^[A-Za-z\u0600-\u06FF]+(?:[ '\u0600-\u06FF-][A-Za-z\u0600-\u06FF]+)*$"
                    title="Please enter a valid name using letters only."
                    autoComplete="name"
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="quote-phone">
                    Phone number
                  </label>

                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="^(01[0125][0-9]{8})$"
                    title="Please enter a valid Egyptian mobile number, e.g. 01012345678."
                    inputMode="numeric"
                    maxLength={11}
                    autoComplete="tel"
                  />

                </div>

              </div>


              {/* =========================
                  CITY / EMAIL
              ========================= */}

              <div className="quote-row">

                <div className="quote-field">

                  <label htmlFor="quote-city">
                    City
                  </label>

                  <input
                    id="quote-city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={60}
                    pattern="^[A-Za-z\u0600-\u06FF]+(?:[ '\u0600-\u06FF-][A-Za-z\u0600-\u06FF]+)*$"
                    title="Please enter a valid city name."
                    autoComplete="address-level2"
                  />

                </div>


                <div className="quote-field">

                  <label htmlFor="quote-email">
                    Email
                  </label>

                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    title="Please enter a valid email address."
                    autoComplete="email"
                  />

                </div>

              </div>


              {/* =========================
                  PROJECT / WHATSAPP
              ========================= */}

              <div className="quote-row">

                <div className="quote-field">

                  <label htmlFor="quote-project">
                    Project Type
                  </label>

                  <select
                    id="quote-project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select project type
                    </option>

                    <option value="residential">
                      Residential
                    </option>

                    <option value="commercial">
                      Commercial
                    </option>

                    <option value="administrative">
                      Administrative
                    </option>

                  </select>

                </div>


                <div className="quote-field">

                  <label htmlFor="quote-whatsapp">
                    WhatsApp Number
                  </label>

                  <input
                    id="quote-whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="Enter your WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    pattern="^(01[0125][0-9]{8})$"
                    title="Please enter a valid Egyptian mobile number, e.g. 01012345678."
                    inputMode="numeric"
                    maxLength={11}
                    autoComplete="tel"
                  />

                </div>

              </div>


              {/* =========================
                  SPACE TYPE
              ========================= */}

              <div className="quote-field quote-full-field">

                <label htmlFor="quote-spaceType">
                  What type of space are you looking for?
                </label>

                <select
                  id="quote-spaceType"
                  name="spaceType"
                  value={formData.spaceType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select space type
                  </option>

                  <option value="apartment">
                    Apartment
                  </option>

                  <option value="villa">
                    Villa
                  </option>

                  <option value="office">
                    Office
                  </option>

                  <option value="commercial">
                    Commercial Space
                  </option>

                </select>

              </div>


              {/* =========================
                  SUBMIT
              ========================= */}

              <div className="quote-submit">

                <button type="submit">
                  SUBMIT REQUEST
                </button>

              </div>

            </form>
          </>
        ) : (

          /* =========================
              SUCCESS MESSAGE
          ========================= */

          <div className="quote-success">

            <div className="quote-success-icon">
              ✓
            </div>

            <h2>
              Thank You!
            </h2>

            <p className="quote-success-main">
              Your request has been submitted successfully.
            </p>

            <p className="quote-success-description">
              We have received your inquiry.
              Our team will review your request and contact you shortly
              to discuss the available options.
            </p>

            <button
              type="button"
              className="quote-success-button"
              onClick={handleAnotherRequest}
            >
              SEND ANOTHER REQUEST
            </button>

          </div>

        )}

      </div>

    </section>
  );
}

export default QuoteForm;