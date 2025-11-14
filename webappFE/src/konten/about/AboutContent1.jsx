import React, { useEffect, useState } from "react";

const AboutContent1 = () => {
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

  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

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

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>

      {/* Responsive grid: DOM order matches desired mobile order
          Mobile order: About Us -> Company Mission -> Company Vision -> Image -> Learn More
          Desktop/grid places items into two columns to match original layout */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "45% 45%",
          gap: isMobile ? "20px" : "60px",
          alignItems: "start",
          justifyContent: "center",
          width: "100%",
          background: "#fff",
          padding: isMobile ? "20px" : "60px 80px",
        }}
      >
        {/* Right column wrapper: spans left column height on desktop and keeps mobile DOM order
            Contains About Us (top), Company Mission (middle), Learn More (bottom) */}
        <div
          style={{
            gridColumn: isMobile ? undefined : "2 / 3",
            gridRow: isMobile ? undefined : "1 / 3",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "flex-start" : "space-between",
            gap: isMobile ? "20px" : "30px",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* About Us (top) */}
          <div
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(50px)",
              transition: "all 1s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              gap: "15px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                color: "#00202e",
                padding: "1px 30px",
                borderRadius: "20px",
                border: "2px solid #d2d3d2f5",
                backgroundColor: "#F7FFDF",
              }}
            >
              About Us
            </div>
            <h3
              style={{
                fontSize: isMobile ? "1.8rem" : "3.5rem",
                color: "#0D2430",
                lineHeight: 1.2,
                textAlign: isMobile ? "center" : "left",
                margin: 0,
              }}
            >
              Solution For Your Every Digital Solution
            </h3>
          </div>

          {/* Company Mission (middle) */}
          <div
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(50px)",
              transition: "all 1s ease 0.3s",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "15px",
              padding: isMobile ? "0" : "30px",
              backgroundColor: isMobile ? "transparent" : "transparent",
              borderRadius: isMobile ? "0" : "15px",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {/* left: icon + title */}
            <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMobile ? "center" : "flex-start",
                  alignSelf: isMobile ? "center" : "flex-start",
                  justifyContent: "flex-start",
                  fontSize: isMobile ? "1.2rem" : "1.5rem",
                  lineHeight: 1.6,
                  color: "#333",
                  textAlign: isMobile ? "center" : "left",
                  fontWeight: "bold",
                  gap: "10px",
                  width: isMobile ? "auto" : "40%",
                  minWidth: isMobile ? undefined : "200px",
                  margin: isMobile ? "0 auto" : undefined,
                }}
            >
              <img
                src="https://nda.co.id/wp-content/uploads/2025/02/17-1.png"
                alt="company mission"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#CDEC76",
                  borderRadius: "50%",
                  padding: "5px",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />
              Company Mission
            </div>

            {/* right: paragraph */}
            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                lineHeight: 1.6,
                color: "#333",
                textAlign: isMobile ? "center" : "left",
                margin: 0,
                flex: isMobile ? undefined : 1,
              }}
            >
              To be the preferred partner of the financial industry in implementing
              digital processes to develop our partners' businesses.
            </p>
          </div>

        </div>
        {/* 3) Company Vision (mobile: third, desktop: left column row 2) */}
        <div
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(-50px)",
            transition: "all 1s ease 0.3s",
            gridColumn: isMobile ? undefined : "1 / 2",
            gridRow: isMobile ? undefined : "2 / 3",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "15px",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* left: icon + title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "flex-start",
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              lineHeight: 1.6,
              color: "#121213ff",
              textAlign: isMobile ? "center" : "left",
              fontWeight: "bold",
              gap: "10px",
              width: isMobile ? "auto" : "40%",
              minWidth: isMobile ? undefined : "200px",
            }}
          >
            <img
              src="https://nda.co.id/wp-content/uploads/2025/02/18.png"
              alt="company vision"
              style={{
                width: "60px",
                height: "60px",
                background: "#CDEC76",
                borderRadius: "50%",
                padding: "15px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
            Company Vision
          </div>

          {/* right: paragraph */}
          <p
            style={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              lineHeight: 1.3,
              color: "#121213ff",
              textAlign: isMobile ? "center" : "left",
              flex: isMobile ? undefined : 1,
              margin: 0,
            }}
          >
            Providing unlimited access to comprehensive and quality resources in the
            digital space for the financial industry and other industries.
          </p>
        </div>

        {/* 4) Image (mobile: fourth, desktop: left column row 1) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease",
            gridColumn: isMobile ? undefined : "1 / 2",
            gridRow: isMobile ? undefined : "1 / 2",
          }}
        >
          <img
            src="/images/gambar2.jpg"
            alt="gambar section"
            style={{
              maxWidth: "100%",
              width: isMobile ? "100%" : "auto",
              height: isMobile ? "auto" : "400px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          />
        </div>

        {/* 5) Learn More Button (mobile: last) */}
        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease 0.5s",
            gridColumn: isMobile ? undefined : "2 / 3",
            gridRow: isMobile ? undefined : "3 / 4",
            width: "100%",
            background: "#00202e",
            padding: isMobile ? "12px" : "20px",
            borderRadius: "50px",
            boxSizing: "border-box",
            color: "#fff",
            marginTop : isMobile ? "0" : "-180px",

          }}
        >
          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              {/* two small checks left & right */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "320px",
                  gap: "16px",
                  marginTop : isMobile ? "10px" : "0",
                }}
              >
                <button
                  aria-label="Select consultation left"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#CDEC76",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>

                {/* <button
                  aria-label="Select consultation right"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#CDEC76",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button> */}
              </div>

              {/* text below the checks */}
              <div
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  maxWidth: "100%",
                  textAlign: "center",
                  padding: "0 8px",
                  marginLeft : isMobile ? "30px" : "0",
                  marginTop: isMobile ? "-50PX" : "0",
                }}
              >
                Join us to achieve sustainable growth and reach your financial goals with the right strategies.
              </div>

              {/* smaller, neat button */}
              <button
                style={{
                  padding: "8px 12px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#CDEC76",
                  color: "#00202e",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "auto",
                  minWidth: "120px",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#00202e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                width: "auto",
              }}
            >
              {/* Left text beside button with small check */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: isMobile ? "center" : "flex-start",
                  gap: "12px",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                <button
                  aria-label="Select consultation"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#CDEC76",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    color: "#fff",
                    cursor: "pointer",
                    alignSelf: isMobile ? "center" : "flex-start",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>

                <div
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    maxWidth: isMobile ? "100%" : "500px",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  Join us to achieve sustainable growth and reach <br /> your financial goals with the right strategies.
                </div>
              </div>

              <button
                style={{
                  padding: "12px 15px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "#CDEC76",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: isMobile ? "100%" : "150px",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

   

      <section id="slebew"
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
          gap: isMobile? "2px" : "60px", 
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
              color : "#28464E",
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
                color : "#28464E",
                fontWeight : "normal",
              }}
            >
              {descriptions[index]}
            </div>
          </div>
        ))}
      </section>
            <p style={{ fontSize: "4rem", margin: "0", color: "white" , backgroundColor : "white"}}>Cihuyyy</p>

    </div>
  );
};

export default AboutContent1;
