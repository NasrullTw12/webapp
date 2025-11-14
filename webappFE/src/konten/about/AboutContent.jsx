import { useEffect } from "react";

const AboutContent = () => {
  useEffect(() => {
    const marquee = document.getElementById("marqueeContent");
    if (!marquee) return;

    const items = [
      '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
    ];

    let content = "";
    for (let i = 0; i < 50; i++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      content += `<span style="margin-right:50px;">${randomItem}</span>`;
    }
    marquee.innerHTML = content;

    // Animasi marquee
    let pos = marquee.parentElement.offsetWidth;
    const animate = () => {
      pos -= 2; // kecepatan animasi
      if (pos < -marquee.offsetWidth) pos = marquee.parentElement.offsetWidth;
      marquee.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

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
        About Us
      </div>

      <p style={{ fontSize: "4rem", margin: "0", color: "white",marginTop : "-8px", fontWeight : "bold", lineHeight : "1" }}>About Natadana</p>

      <p
        style={{
          fontSize: "1rem",
          maxWidth: "600px",
          margin: "0",
          color: "white",
          marginBottom: "60px",
          padding : "10px",
        }}
      >        
        Armed with experience in the modern and digital-based financial world.
        Natadana was founded as a solution for partners in effectiveness and efficiency in running operations and distribution processes.
      </p>

      <div
        id="overlayMarquee"
        style={{
          marginTop: "20px",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#CDEC76",
          borderTop: "2px solid #CDEC76",
          borderBottom: "2px solid #CDEC76",
          padding: "10px 0",
          position: "relative",
        }}
      >
        <div
          id="marqueeContent"
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
    </div>
  );
};

export default AboutContent;
