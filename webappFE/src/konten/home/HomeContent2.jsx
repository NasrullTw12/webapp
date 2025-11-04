import React, { useEffect, useState } from "react";

const HomeContent2 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          margin: 0,
          background: "#fff",
          minHeight: "500px",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* KIRI: Company Vision */}
        <div
          style={{
            flex: 1,
            padding: "50px",
            color: "black",
            fontFamily: "sans-serif",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease",
          }}
        >

          {/* Gambar di bawah teks */}
          <img
            src="/images/gambar2.jpg"
            alt="Company Vision"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          />

           <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Company Vision
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "black",
              marginBottom: "40px",
            }}
          >
            Providing unlimited access to comprehensive and quality resources in
            the digital space for the financial industry and other industries.
          </p>
        </div>

        {/* KANAN: About Us + Company Mission */}
        <div
          style={{
            flex: 1,
            padding: "50px",
            color: "#0C2B4E",
            fontFamily: "sans-serif",
            backgroundColor: "#FFFFFF",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(50px)",
            transition: "all 1s ease 0.5s",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>About Us</h2>
          <h3
            style={{
              fontSize: "1.5rem",
              color: "#FF8C00",
              marginBottom: "30px",
            }}
          >
            The Best Digital Consultant In Town
          </h3>

          <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
            Company Mission
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#333",
              marginBottom: "30px",
            }}
          >
            To be the preferred partner of the financial industry in
            implementing digital processes to develop our partners’ businesses.
          </p>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "#333",
            }}
          >
            Join us to achieve sustainable growth and reach your financial goals
            with the right strategies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent2;
