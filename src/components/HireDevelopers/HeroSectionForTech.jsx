import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSectionTech = ({ title, description, buttonText, imageSrc }) => {
  const defaultTitle = "Technology Solutions";
  const defaultDescription = "Transform your business with cutting-edge technology solutions designed to drive growth, efficiency, and innovation in today's digital landscape.";
  const defaultButtonText = "Get Started";

  return (
    <div className="hero-wrapper">
      <style jsx>{`
        .hero-wrapper {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          min-height: 20rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .hero-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: black;
  
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .content-section {
          max-width: 800px;
          margin-bottom: 60px;
        }

        .badge {
          display: inline-block;
          background: rgba(255, 80, 16, 0.2);
          color: #ff5010;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 80, 16, 0.3);
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 30px;
          text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #ff5010, #ff7040);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #ff5010, #ff7040);
          opacity: 0.3;
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #a0aec0;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          text-align: justify;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #ff5010, #ff7040);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(255, 80, 16, 0.3);
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 80, 16, 0.4);
        }

        .cta-button:active {
          transform: translateY(-1px) scale(1.02);
        }

      

       
        .placeholder-image {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a0aec0;
          font-size: 1.1rem;
          font-weight: 500;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .placeholder-image::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border: 3px solid #ff5010;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-circle {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid rgba(255, 80, 16, 0.2);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-circle:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-circle:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 2s;
        }

        .floating-circle:nth-child(3) {
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 768px) {
          .hero-wrapper {
            padding: 60px 20px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 1rem;
          }

          .image-container {
            padding: 30px;
          }

          .placeholder-image {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .image-container {
            padding: 20px;
          }

          .placeholder-image {
            height: 200px;
          }
        }
      `}</style>
      
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      <div className="hero-container">
        <div className="content-section">
          {title && (
            <div className="badge">
              {title}
            </div>
          )}
          
          <h1 className="hero-title">
            Innovative solutions <span className="highlight">for your business</span>
          </h1>
          
          <p className="hero-description">
            {description || defaultDescription}
          </p>
          
          <button className="cta-button">
            {buttonText || defaultButtonText}
            <ArrowRight size={20} />
          </button>
        </div>

    
      </div>
    </div>
  );
};

export default HeroSectionTech;