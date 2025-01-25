import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    address: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const emailSubject = encodeURIComponent(formData.subject);
      const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AAddress: ${formData.address}%0ACity: ${formData.city}`;
      window.location.href = `mailto:muskaniqbal123@outlook.com?subject=${emailSubject}&body=${emailBody}`;
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> us
      </h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="subject" className="form-label">
            Message Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className={`btn btn-primary ${isFormValid() ? '' : 'disabled'}`}
            disabled={!isFormValid()}
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
