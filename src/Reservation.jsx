
import React, { useEffect, useState } from 'react'
import emailjs from "@emailjs/browser";

function Reservation() {

  let [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
    guests: "No. of Guests Attending",
  });

  let [activateButton, setActivateButton] = useState(true);

  let updateFormData = (e) => {

    setFormData( {
      ...formData,
      [e.target.name]: e.target.value
    });
    
  }

  useEffect( () => {
    const isEmpty = Object.values(formData).some(
      (v) => v === "" || v === "No. of Guests Attending"
    );

    setActivateButton(isEmpty)
  }, [formData])
  

  let handleTheForm = (e) => {
    e.preventDefault();

    const serviceID = "service_3tj6xqr";
    const templateID = "template_1tgonc4";
    const publicKey = "3c2FJ4xc4ldLJfZxr";

    emailjs.send(serviceID, templateID, formData, publicKey).then((response) => {
      alert("Mail sent successfully");
      setFormData({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        date: "",
        time: "",
        guests: "No. of Guests Attending",
      });
    }).catch((error) => {
      alert('Failed to send email');
    })
  }

  return (
    <>
      <section className="flex flex-col justify-center my-30 px-5 sm:px-8 md:px-10">
        <h3
          className="font-medium text-xl md:text-2xl lg:text-4xl text-center flex flex-col items-center"
        >
          Make a reservation
        </h3>

        <div className="flex gap-2 justify-center items-center my-3">
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
        </div>

        <form onSubmit={handleTheForm}>
          <section className="flex flex-col sm:flex-row justify-center gap-5 my-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="font-bold text-base">
                FirstName
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="FirstName"
                value={formData.firstname}
                onChange={updateFormData}
                className="border border-gray-500/50 px-6 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600 focus:outline-amber-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="font-bold text-base">
                LastName
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={updateFormData}
                placeholder="LastName"
                className="border border-gray-500/50 px-6 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600 focus:outline-amber-300"
                required
              />
            </div>
          </section>

          <section className="flex flex-col sm:flex-row justify-center gap-5 my-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="font-bold text-base">
                Contact Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={updateFormData}
                placeholder="Contact Number"
                className="border border-gray-500/50 px-6 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600 focus:outline-amber-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-base">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={updateFormData}
                placeholder="E-mail"
                className="border border-gray-500/50 px-6 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600 focus:outline-amber-300"
                required
              />
            </div>
          </section>

          <section className="flex flex-col sm:flex-row justify-center gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="font-bold text-base">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={updateFormData}
                className="border border-gray-500/50 px-6 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600  focus:outline-amber-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="time" className="font-bold text-base">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={updateFormData}
                className="border border-gray-500/50 px-5 sm:px-15 py-2 lg:w-100 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg  text-gray-600 focus:outline-amber-300"
                required
              />
            </div>
          </section>

          <div className="flex flex-col items-center gap-2 my-5">
            <label htmlFor="guests" className="font-bold text-base">
              No of Guests
            </label>

            <select
              name="guests"
              id="guests"
              value={formData.guests}
              onChange={updateFormData}
              className="border border-gray-500/50 px-6 py-2 rounded-md placeholder:font-medium placeholder:text-gray-500 font-medium text-lg text-gray-600 focus:outline-amber-300 sm:w-100 lg:w-200"
              required
            >
              <option value="No. of Guests Attending">
                No. of Guests Attending
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button
              type="submit"
              className="bg-amber-300 py-2 rounded-md text-lg font-semibold md:text-xl px-20 sm:w-80 md:w-100 my-10"
              disabled={activateButton}
            >
              Book it
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Reservation