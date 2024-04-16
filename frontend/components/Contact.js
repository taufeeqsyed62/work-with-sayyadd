import React from "react";
import { useState } from "react";
import styles from "./Contact.module.css"; // Import CSS module

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e35fb346-b5f1-4ed5-99f7-83582a30dfe2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <input type="text" name="name" required placeholder="Your Name" />
        <input type="email" name="email" required placeholder="Your Email" />
        <textarea name="message" required placeholder="Your Message"></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span className={styles.formResult}>{result}</span>
    </div>
  );
}
