import React, { useEffect, useState } from "react";

const AboutContent1 = () => {
const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);
  const targets = [10, 13, 98, 15];
  const descriptions = [
    "Happy Customers",
    "Awards Winning",
    "Striving for Customer Satisfaction is Top Priority",
    "Completed Project",
  ];
  const icons = ["+", "+", "%", "+"];
  const [counts, setCounts] = useState(Array(targets.length).fill(0));

  useEffect(() => {
    setAnimate(true);

    const intervals = [];

    targets.forEach((target, index) => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.ceil(target / 50);
        if (current > target) current = target;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });

        if (current >= target) clearInterval(interval);
      }, 20);

      intervals.push(interval);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <section id ="kiwkiw"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
          minHeight: "500px",
          background: "#ffff",
        }}
      >
        <div
          style={{
            flex: "1 1 500px",
            padding: "50px",
            color: "#121213ff",
            fontFamily: "sans-serif",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease",
          }}
        >
          <img
            src="/images/gambar2.jpg"
            alt="Company Vision"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              marginBottom: "20px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
           
            <p
              style={{
                flex: "1 1 48%", 
                fontSize: "2rem",
                lineHeight: 1.6,
                color: "#121213ff",
                textAlign: "justify",
                margin: 0,
                marginTop: "10px",
                fontWeight : "bold",
              }}
            >
              <span> <img
            src="https://nda.co.id/wp-content/uploads/2025/02/18.png"
            alt="company vision"
            style={{
               width: "60px",
              height: "60px",
              background: "#CDEC76",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain" 
            
            }}
          /></span>
              Company Vision
            </p>

            <p
              style={{
                flex: "1 1 48%",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                color: "#121213ff",
                margin: 0,
              }}
            >
              Providing unlimited access to comprehensive and quality resources in the digital space for the financial industry and other industries
            </p>
          </div>
        </div>

        <div
          style={{
            flex: "1 1 500px",
            padding: "1px",
            color: "#121213ff",
            fontFamily: "sans-serif",
            backgroundColor: "#ffff",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(50px)",
            transition: "all 1s ease 0.5s",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              color: "#0D2430",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "2px solid #CDEC76",
              marginBottom: "10px",
              backgroundColor : "#e9f1b6ff"
            }}
          >
            About Us
          </div>          
          <h3
            style={{
              fontSize: isMobile ? "2rem" : "3.5rem",
              color: "#0D2430",
              marginBottom: "30px",
            }}
          >
            Solution For Your Every Digital Solution
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <p
              style={{
                flex: "1 1 48%", // dua kolom
                fontSize: "2rem",
                lineHeight: 1.6,
                color: "#333",
                textAlign: "justify",
                marginBottom: "20px",
                fontWeight : "bold",
              }}
            >
              <span>
                <img
            src="https://nda.co.id/wp-content/uploads/2025/02/17-1.png"
            alt="company vision"
            style={{
               width: "60px",
              height: "60px",
              background: "#CDEC76",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain" 
            
            }}
          />
              </span>
            Company Mission
           </p>

            <p
              style={{
                flex: "1 1 48%",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#333",
                marginBottom: "20px",
              }}
            >
             To be the preferred partner of the financial industry in implementing digital processes to develop our partners’ businesses.

            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#00202e",
              borderRadius: "20px",
              border: "2px solid #CDEC76",
              padding: "30px",
              marginBottom: "20px",
            }}
          >

            <p
              style={{
                flex: "1 1 auto", 
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "#fff",
                margin: 0,
                background : "#00202e",
              }}
            >
              <span style={{   background: "#CDEC76",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain",
              color : "#00202e",
            }}>✓</span> Join us to achieve sustainable growth and reach your financial <br />goals
              with the right strategies.
            </p>

            
            <button
              style={{
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                backgroundColor: "#CDEC76",
                color: "#0C2B4E",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                whiteSpace: "nowrap", 
                fontSize: "1rem",
              }}
              className="get-started-button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="#0C2B4E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                style={{ transition: "transform 0.3s ease", }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
    

          
        </div>
      </section>

      <section id="kiwkiw"
        style={{
          display: "flex",
          flexDirection: "row", 
          flexWrap: "wrap", 
          justifyContent: "center",
          alignItems: "stretch",
          width: "100%",
          padding: "40px 20px",
          boxSizing: "border-box",
          background: "#ffff",
          gap: "60px", 
        }}
      >

        {counts.map((count, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 220px", 
              maxWidth: "250px",
              minWidth: "200px",
              height: "150px",
              color: "#121213ff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              fontWeight: "bold",
              position: "relative",
              paddingTop: "15px",
              textAlign: "center",
              background: "transparent",
            }}
          >
        <div
          style={{
            width: "80%",
            position: "absolute",
            top: "-2px",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "5px",
              background: "#CDEC76",
            }}
          ></div>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#CDEC76",
              alignSelf: "flex-end", 
            }}
          ></div>
        </div>



            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
              }}
            >
              <span>{count}</span>
              <span
                style={{
                  marginLeft: "8px",
                  marginTop: "-8px",
                  fontSize: "2rem",
                  color: "#CDEC76",
                }}
              >
                {icons[index]}
              </span>
            </div>

            <div
              style={{
                fontSize: "1rem",
                marginTop: "10px",
                maxWidth: "90%",
                lineHeight: 1.4,
              }}
            >
              {descriptions[index]}
            </div>
          </div>
        ))}
      </section>
            <p style={{ fontSize: "4rem", margin: "0", color: "white" , backgroundColor : "white"}}>Cihuyyy</p>
  

    <style>
        {`
        @media (max-width: 768px) {
  #kiwkiw {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    padding: 20px !important;
  }

  #kiwkiw > div {
    width: 100% !important;
    position: relative !important;
    transform: none !important;
    top: auto !important;
    margin-bottom: 20px !important;
  }

            
          }
        `}
      </style>

    </div>
  );
};

export default AboutContent1;
