

import Image from "next/image";

const Industries = () => {
  return (
    <div className=" industries-container">
      {/* Heading and Paragraph Section */}
      <div className="text-left mb-10">
        <h1 className="heading text-[40px] font-[500] italic leading-[48.41px] text-left mb-[2rem]" style={{ color: '#ffffff' }}>
          Industries We <span style={{ color: '#2CC5D9' }}>Serve</span>
        </h1>
        <p className="subheading text-[20px] font-[500] italic leading-[24.2px] text-left" style={{ color: '#ffffff' }}>
          We have successfully helped businesses belonging to almost all
          industry verticals. Our dedicated developers can help you build
          industry-specific solutions that perfectly serve your business
          interests.
        </p>
      </div>

      {/* Grid Section */}
      <div className="industries-grid">
        {industriesData.map((industry, index) => (
          <div
            key={index}
            className={`industry-item ${industry.bg}`}
            style={{
              height: `${industry.height}px`,
              gridArea: `item-${index + 1}`,
            }}
          >
            <div className="flex items-center gap-2 justify-center h-full">
              <div className="flex items-center justify-start w-1/3">
                <Image
                  src={industry.img}
                  alt={industry.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <div className="flex items-center justify-center">
                <h2 className="text-left font-[500] text-[16px] sm:text-[20px] italic leading-[24.2px] text-black py-1 rounded">
                  {industry.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .industries-container {
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          padding-top: 70px;
          padding-bottom: 70px;
          width: 80%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .text-left {
          text-align: left;
        }
        
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, fr);
          grid-template-areas:
            "item-1 item-2 item-3"
            "item-4 item-5 item-6"
            "item-7 item-8 item-9";
          gap: 1rem;
          width: 100%;
        }
        
        .industry-item {
          ;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .industry-item:hover {
          transform: scale(1.05);
        }
        
        /* Responsive Media Queries */
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "item-1 item-2"
              "item-3 item-4"
              "item-5 item-6"
              "item-7 item-8";
          }
        }
        
        @media (max-width: 300px) {
          .industries-grid {
            grid-template-columns: 1fr;
            grid-template-areas:
              "item-1"
              "item-2"
              "item-3"
              "item-4"
              "item-5"
              "item-6"
              "item-7"
              "item-8";
          }
        }
      `}</style>
    </div>
  );
};

// Define the industries data
const industriesData = [
  {
    title: "Real Estate Solutions",
    img: "/real-estatge.png",
    bg: "bg-[#FEE2E1]",
    // width: 368,
    // height: 112,
  },
  {
    title: "Retail Solutions",
    img: "/retail.png",
    bg: "bg-[#DCFCE7]",
    // width: 368,
    // height: 112,
  },
  {
    title: "Automotive Solutions",
    img: "/automotive.png",
    bg: "bg-[#DBE9FE]",
    // width: 368,
    // height: 112,
  },
  {
    title: "E.V. Industry Solutions",
    img: "/ev.png",
    bg: "bg-[#FEF9C3]",
    // width: 444,
    // height: 112,
  },
  {
    title: "Cloud Solutions",
    img: "/cloud.png",
    bg: "bg-[#B4E9FF]",
    // width: 368,
    // height: 112,
  },
  {
    title: "Health Solutions",
    img: "/health.png",
    bg: "bg-[#B4E9FF]",
    // width: 368,
    // height: 112,
  },
  {
    title: "Education Solutions",
    img: "/education.png",
    bg: "bg-[#F3E8FF]",
    // width: 368,
    // height: 112,
  },
  {
    title: "Finance IT Solutions",
    img: "/finance.png",
    bg: "bg-[#FCDFA4]",
    // width: 368,
    // height: 112,
  },
];

export default Industries;

