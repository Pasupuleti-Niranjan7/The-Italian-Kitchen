import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

let Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let [activateButton, setActivateButton] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const isEmpty = Object.values(formData).some((v) => v === '');

    setActivateButton(isEmpty)
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_ex2dkwg";
    const templateID = "template_fb8c2j5";
    const publicKey = "3c2FJ4xc4ldLJfZxr";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
        })
      })
      .catch((error) => {
        alert("Failed to send email.");
      });
  };
  
  return (
    <>
      <section className="flex flex-col justify-center my-35 px-5 sm:px-8 md:px-10">
        <h3 className="font-semibold text-xl md:text-4xl lg:text-4xl text-center flex flex-col items-center">
          Contact Us
        </h3>

        <div className="flex gap-2 justify-center items-center my-2">
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center my-5 gap-5 md:items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160  md:py-3 lg:py-3 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
            required
          />
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160  md:py-3 lg:py-3 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160 md:py-3 lg:py-3 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-amber-400/80 p-2 rounded-sm font-medium text-lg shadow-[0_0_0px_1px_#f0f0f0] w-65 md:w-80 lg:w-120 md:py-2 lg:py-3"
              disabled={activateButton}
            >
              Contact Us
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
