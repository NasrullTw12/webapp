import React, { useEffect, useState } from "react";

const HomeContent1 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        boxSizing: "border-box",
        background: "linear-gradient(to bottom, #56595eff, #FFFFFF)",
        minHeight: "500px",
      }}
    >
      {/* Konten telah dihapus */}
    </section>
  );
};

export default HomeContent1;
