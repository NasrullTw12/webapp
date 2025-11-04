import React, { useEffect, useState } from "react";

const HomeContent4 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "center",
    color: "#0C2B4E",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  };

  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover ? "translateY(-10px)" : "translateY(0)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 8px 25px rgba(0,0,0,0.2)"
      : "0 4px 15px rgba(0,0,0,0.1)";
  };

  return (
    <div style={{ width: "100%", margin: 0, padding: "80px 0" }}>
      <section
        style={{
          background: "linear-gradient(to bottom, #0C2B4E, #117A65)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 250px)",
          gap: "30px",
          padding: "60px",
          justifyItems: "center",
          alignItems: "center",
          position: "relative",
          minHeight: "650px",
          color: "#fff",
        }}
      >
        {/* Card 1 - kiri atas */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease",
            gridColumn: "1 / 2",
            gridRow: "1 / 2",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <h3>Card 1</h3>
          <p>Deskripsi singkat konten pertama.</p>
        </div>

        {/* Card 2 - kiri bawah */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.2s",
            gridColumn: "1 / 2",
            gridRow: "2 / 3",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <h3>Card 2</h3>
          <p>Deskripsi singkat konten kedua.</p>
        </div>

        {/* Card 3 - tengah */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.8)",
            transition: "all 1s ease 0.4s",
            gridColumn: "2 / 3",
            gridRow: "1 / span 2",
            width: "90%",
            height: "60%",
            backgroundColor: "#FFF8D4",
            marginBottom: "200 px",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <h3>Card Tengah</h3>
          <p>Konten utama berada di bagian tengah grid.</p>
        </div>

        {/* Card 4 - kanan atas */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.6s",
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <h3>Card 4</h3>
          <p>Deskripsi singkat konten keempat.</p>
        </div>

        {/* Card 5 - kanan bawah */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.8s",
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <h3>Card 5</h3>
          <p>Deskripsi singkat konten kelima.</p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent4;
