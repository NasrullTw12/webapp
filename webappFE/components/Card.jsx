import React from "react";

const Card = () => {
  return (
    <div className="subscribe-card">
      <div className="subscribe-left">
        <h2>Subscribe To Our <br /> Weekly Newsletter</h2>
      </div>

      <div className="subscribe-right">
        <label htmlFor="email">Free Consultation</label>

        <label htmlFor="email">Free coba</label>

        <div className="input-group">
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            disabled
          />
          <button disabled>Subscribe</button>
        </div>
      </div>

      <style>
        {`
          .subscribe-card {
            position: absolute;
            bottom: -120px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            background-color: #CDEC76;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            padding: 40px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            font-color: #0D2430
          }

          .subscribe-left h2 {
            color: #0C2B4E;
            font-size: 28px;
            font-weight: bold;
            margin: 0;
          }

          .subscribe-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .subscribe-right label {
            color: black;
            font-weight: bold;
            font-size: 16px;
          }

          .input-group {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .input-group input {
            flex: 1;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 14px;
            background-color: #fff;
          }

          .input-group button {
            background-color: #0C2B4E;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            cursor: not-allowed;
            opacity: 0.7;
            white-space: nowrap;
          }

          /* 🟡 Tablet - medium screens */
          @media (max-width: 1024px) {
            .subscribe-card {
              flex-direction: column;
              text-align: center;
              gap: 20px;
              width: 90%;
              bottom: -100px;
              padding: 30px;
            }
            .subscribe-left h2 {
              font-size: 24px;
            }
            .input-group {
              flex-direction: column;
              align-items: stretch;
            }
            .input-group input,
            .input-group button {
              width: 100%;
            }
          }

          /* 🟢 HP - small screens */
          @media (max-width: 768px) {
            .subscribe-card {
              position: relative;
              bottom: 0;
              left: 0;
              transform: none;
              width: 90%;
              flex-direction: column;
              align-items: stretch;
              padding: 25px;
              gap: 15px;
            }

            .subscribe-left h2 {
              font-size: 20px;
              text-align: center;
            }

            .subscribe-right label {
              font-size: 14px;
              text-align: left;
            }

            .input-group {
              flex-direction: column;
              align-items: stretch;
              gap: 10px;
            }

            .input-group input,
            .input-group button {
              width: 100%;
              font-size: 14px;
              padding: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Card;
