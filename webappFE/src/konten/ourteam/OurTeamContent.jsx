import { useEffect } from "react";

const OurTeamContent = () => {
  useEffect(() => {
    const marquee = document.getElementById("teamMarqueeContent");
    const items = [
      '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>',
    ];

    let content = "";
    for (let i = 0; i < 50; i++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      content += `<span style="margin-right:100px;">${randomItem}</span>`;
    }
    marquee.innerHTML = content;

    let pos = marquee.parentElement.offsetWidth;
    const animate = () => {
      pos -= 2;
      if (pos < -marquee.offsetWidth) pos = marquee.parentElement.offsetWidth;
      marquee.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const cardStyle = {
    flex: "1 1 45%",
    backgroundColor: "#ffffff22",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.2)",
    position: "relative",
    minWidth: "280px",
    transition: "all 0.3s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const textOverlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "15px",
    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
    color: "white",
    textAlign: "left",
  };

  const iconContainerStyle = {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
        background: "linear-gradient(to bottom, #00202e, #003f5c)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          color: "#CDEC76",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "2px solid #3e3f3bff",
          marginBottom: "0",
          marginTop: "60px",
        }}
      >
        Our Team
      </div>

      <p style={{ fontSize: "4rem", margin: "0", color: "white" }}>
        Meet Our Member
      </p>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: "600px",
          margin: "0",
          color: "white",
          marginBottom: "60px",
        }}
      >
        A Team of Experts Committed to Driving Your Success Forward
      </p>

      <div
        id="teamMarquee"
        style={{
          marginTop: "20px",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#CDEC76",
          borderTop: "2px solid #CDEC76",
          borderBottom: "2px solid #CDEC76",
          padding: "15px 0",
          position: "relative",
          height: "85px",
        }}
      >
        <div
          id="teamMarqueeContent"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: "2rem",
            color: "#0D2430",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "20px",
          marginTop: "60px",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        <div style={cardStyle}>
          <img src="/images/pakadit.jpeg" alt="Team Member 1" style={imageStyle} />
          <div style={textOverlayStyle}>
            <h3 style={{ margin: "0" }}>dwi adhitya putera</h3>
            <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>Direktur Utama</p>
            <div style={iconContainerStyle}>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/1714114789670.jpg"
            alt="Team Member 2"
            style={imageStyle}
          />
          <div style={textOverlayStyle}>
            <h3 style={{ margin: "0" }}>Hudan Maulana</h3>
            <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>
              Chief Technology Officer
            </p>
            <div style={iconContainerStyle}>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" style={{ color: "white" }}>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
      </div>
      <p style={{ fontSize: "4rem", margin: "0", color: "white" , marginTop : "20px"}}></p>
      <style>
        {`
          @media (max-width: 768px) {
            #teamMarqueeContent {
              font-size: 2rem !important;
            }
            div[style*="min-width: 280px"] img {
              height: 250px !important;
            }
            div[style*="min-width: 280px"] {
              flex: 1 1 100% !important;
              max-width: 90% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OurTeamContent;
