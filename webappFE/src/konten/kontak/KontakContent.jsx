import { useEffect } from "react";
import KontakContent1 from "../kontak/KontakContent1";

const Kontak = () => {
  useEffect(() => {
    const marquee = document.getElementById("marqueeContact");
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

    let pos = marquee.parentElement.offsetWidth;
    const animate = () => {
      pos -= 2;
      if (pos < -marquee.offsetWidth) pos = marquee.parentElement.offsetWidth;
      marquee.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
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
          Contact Us
        </div>

        <p style={{ fontSize: "4rem", margin: "0", color: "white" }}>About Natadana</p>

        <p
          style={{
            fontSize: "1rem",
            maxWidth: "600px",
            margin: "0",
            color: "white",
            marginBottom: "60px",
          }}
        >          
          Questions? Ideas? Just want to say hello? Drop us a message—we’d love to hear from you!
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
            style={{
              marginTop: "0",
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
              id="marqueeContact"
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
      </div>
          <KontakContent1 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
          background: "#ffff",
          color: "white",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
      <div
        style={{
          position: "relative",
          flex: "1",
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://nda.co.id/wp-content/uploads/2025/02/carlos-gil-RVHYGbQt28k-unsplash-scaled.jpg"
          alt="Contact Illustration"
          style={{
            width: "100%",
            maxWidth: "100%",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 0 20px rgba(0,0,0,0.4)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "50%",
            borderRadius: "20px",
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        ></div>

<div
  style={{
    position: "absolute",
    bottom: "10px", // turun lebih rendah
    left: 0,
    width: "100%", // ambil seluruh lebar parent
    padding: "0 20px", // beri jarak kiri-kanan
    color: "#fff",
    textAlign: "left", // rata kiri
    zIndex: 10,
  }}
>
  <p style={{ 
    marginBottom: "5px", 
    fontWeight: "bold", 
    fontSize: "clamp(0.7rem, 2vw, 0.9rem)" // lebih kecil
  }}>
    We’re glad you’re here...
  </p>

  <hr style={{ 
    width: "100%", // ikut lebar div
    border: "1px solid #fff", 
    margin: "5px 0", 
    opacity: 0.8 
  }} />

  <p style={{ 
    marginTop: "5px", 
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)", 
    fontWeight: "normal" 
  }}>
    Hudan Maulana
  </p>
  <p style={{ 
    marginTop: "2px", 
    fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)", 
    fontWeight: "normal", 
    color:"#CDEC76" 
  }}>
    CEO Natadana
  </p>

  <img
    src="https://nda.co.id/wp-content/uploads/2025/02/1714114789670.jpg" 
    alt="Gambar Baru"
    style={{
      width: "clamp(40px, 10vw, 60px)",  // lebih kecil
      height: "clamp(40px, 10vw, 60px)",
      borderRadius: "50%",
      objectFit: "cover",
      marginTop: "5px",
    }}
  />
</div>


      </div>
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "600px",
          }}
        >
          <div
          style={{
            display: "inline-block",
            color: "black",
            padding: "10px 20px",
            borderRadius: "20px",
            marginBottom: "0",
            backgroundColor:"#CDEC76",
            width:"fit-content",
          }}
        >
          Get In Touch
        </div>
          <h2 style={{ fontSize: "2.5rem", margin: "0", color:"#0D2430",marginTop: "-20px" }}>We Ready To Help You</h2>
          <p style={{ fontSize: "1rem", marginBottom: "10px", color: "#0D2430",marginTop: "-20px" }}>
              Have a question or need assistance? Fill out the form below, and we’ll get back to you as soon as possible! 
          </p>
        <div style={{  backgroundColor: "#FBF9F7", padding: "10px", borderRadius: "15px", marginTop: "-20px"}}>
          <p style={{color : "#596F1A", marginBottom: "10px", fontSize : "1.5rem", fontWeight : " bold"}}>
            let's connect with us
          </p>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginBottom : "10px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              disabled
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              disabled
              style={inputStyle}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              disabled
              style={{ ...inputStyle, resize: "none" }}
            ></textarea>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.9rem",
                  color: "black",
                }}
              >
              <input type="checkbox" />
                I agree to the Privacy Policy
              </label>

              <button
                type="submit"
                disabled
                style={{
                  backgroundColor: "#0D2430",
                  color: "white",
                  border: "none",
                  padding: "10px 25px",
                  borderRadius: "8px",
                  cursor: "not-allowed",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                Subscribe Now →
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
       <div
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "20px",
        }}
      >
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.525045205579!2d106.793424!3d-6.246428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f113286b1dd9%3A0x809586ad22c6f374!2sWisma%20Bayuadji!5e0!3m2!1sid!2sus!4v1762746008677!5m2!1sid!2sus"          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Natadana Location"
        ></iframe>

        
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px 15px",
  borderRadius: "8px",
  border: "2px solid #ccc",
  backgroundColor: "#f4f4f4",
  color: "#black",
  fontSize: "1rem",
  outline: "none",
};



export default Kontak;
