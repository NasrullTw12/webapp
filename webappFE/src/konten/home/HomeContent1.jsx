import React, { useEffect, useState } from "react";

const HomeContent1 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // cek pertama kali
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ruangData = [
    {
      name: "Digital Project",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/14.png",
      description:
        "Transforming your digital ideas into reality with <cutting-edge technology and creative solutions.",
    },
    {
      name: "Fidusia Solution",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/15.png",
      description:
        "Providing secure and reliable fiduciary services to ensure your assets and agreements are fully protected.",
    },
    {
      name: "Finance Solution",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/16.png",
      description:
        "Offering smart financial strategies and tools to help your business grow efficiently and sustainably.",
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        boxSizing: "border-box",
        background: "linear-gradient(to bottom, #003f5c, #fff)",
        padding: "20px",
        gap: "20px",
      }}
    >
      <div
        style={{
          flex: isMobile ? "0 0 80%" : "0 0 22%",
            maxWidth: "400px",
            position: "relative",
            borderRadius: "35px",
            overflow: "hidden",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.5s ease",
            height: "200px",
            marginTop: isMobile ? "20px" : "0px",
            height: "260px",
        }}
      >
        <img
          src="https://nda.co.id/wp-content/uploads/2025/02/28-19.jpg"
          alt="Left Card"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
             style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "70%", 
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
        ></div>
        <div
         style={{
           position: "absolute",
            top: "70%", 
            left: "60%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.3rem",
            textAlign: "left",
            width : "100%",
            }}
        >
          How Does It Work?
            <div
            style={{
               marginTop: "10px",
                color: "#CDEC76",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.9rem",
            }}
            >
            Learn More <span style={{ fontSize: "1rem" }}>→</span>
            </div>
        </div>
      </div>

      <div
        style={{
          flex: isMobile ? "0 0 80%" : "0 0 73%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "10px",
          padding: "10px",
          borderRadius: "35px",
          background: "linear-gradient(to bottom, #00202e, #003f5c)",
          opacity: animate ? 1 : 0,
          transform: animate ? "translateX(0)" : "translateX(50px)",
          transition: "all 0.5s ease",
          height: "auto",
       
        }}
      >
        {ruangData.map((ruang, index) => (
          <div
            key={index}
           style={{
              flex: isMobile ? "0 0 100%" : "1 1 0",
              maxWidth: isMobile ? "100%" : "calc(33% - 10px)",
              background: "linear-gradient(to bottom, #00202e, #003f5c)",
              borderRadius: "35px",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              color: "#CDEC76", 
              fontWeight: "bold",
              border: "1px solid #003f5c",
              textAlign: "left",
              marginBottom: isMobile ? "10px" : "0",
              background: "#FFFFFF0A",
              height: "250px",
            }}
          >
          <img
            src={ruang.icon}
            alt={`${ruang.name} icon`}
            style={{
              marginBottom: "10px",
              width: "60px",
              height: "60px",
              background: "#CDEC76",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain" 
            }}            
            />
            <div style={{ marginBottom: "5px", fontSize: "1.2rem" }}>{ruang.name}</div>
            <div style={{ fontWeight: "normal", fontSize: "0.9rem",  color : "white"}}>
              {ruang.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeContent1;
