import React, {useState} from "react";
import "../../css/Contact.css";

export default function Contact() {
  // Define state variables for form fields and validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the name field
    if (!name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // Validate the email field using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    // If both name and email are valid, you can proceed with form submission or any other actions
    if (name && emailPattern.test(email)) {
      // Handle form submission or other actions here
      console.log("Form submitted");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name) {
                setNameError("Name is required");
              } else {
                setNameError("");
              }
            }}
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              if (!emailPattern.test(email)) {
                setEmailError("Invalid email address");
              } else {
                setEmailError("");
              }
            }}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
