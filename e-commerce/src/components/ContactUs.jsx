import React from "react";

const ContactUs = () => {
  return (
    <div style={{ margin: "2rem 0" }} className="contact">
      <h2 style={{ textAlign: "center" }}>Contact us</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{
            border: "1px solid black",
            margin: "0.5rem 0",
            width: "20rem",
          }}
          type="text"
          placeholder="email"
        />

        <input
          style={{
            border: "1px solid black",
            margin: "0.5rem 0",
            width: "20rem",
          }}
          type="text"
          placeholder="Name"
        />
        <input
          style={{
            border: "1px solid black",
            margin: "0.5rem 0",
            width: "20rem",
          }}
          type="number"
          placeholder="phone Number"
        />
        <textarea
          style={{
            border: "1px solid black",
            margin: "0.5rem 0",
            width: "20rem",
            height: "8rem",
          }}
          name="comment"
          form="usrform"
        ></textarea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "black",
              opacity: "0.8",
              borderRadius: "0.2rem",
              border: "none",
              color: "white",
              padding: "0.3rem 1rem",
              fontSize: "1.5rem",
            }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
