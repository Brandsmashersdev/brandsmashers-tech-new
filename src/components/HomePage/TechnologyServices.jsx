"use client";
import styles from "./TechnologyServices.module.css";

const TechnologyServices = () => {
    const technologies = [
        { title: ".NET Development", bgColor: "bg-purple-100", iconSrc: "/net-icon.png" },
        { title: "Backbone js Development", bgColor: "bg-yellow-200", iconSrc: "/backbone-icon.png" },
        { title: "Android Development", bgColor: "bg-green-100", iconSrc: "/android-icon.png" },
        { title: "CPP Development", bgColor: "bg-blue-200", iconSrc: "/cpp-icon.png" },
        { title: "Amazon Web Services", bgColor: "bg-yellow-100", iconSrc: "/aws-icon.png" },
        { title: "Angular Development", bgColor: "bg-pink-100", iconSrc: "/angular-icon.png" },
        { title: "ASP.NET Development", bgColor: "bg-blue-100", iconSrc: "/aspnet-icon.png" },
        { title: "Azure Development", bgColor: "bg-sky-200", iconSrc: "/azure-icon.png" },
        { title: "Backend Development", bgColor: "bg-green-200", iconSrc: "/backend-icon.png" },
        { title: "Blockchain Development", bgColor: "bg-yellow-300", iconSrc: "./blockchain-icon.png" },
    ];

    return (
        <div className="text-white py-8 tech mt-12 relative overflow-hidden mx-auto w-4/5">
            <div>
                <h1 className="font-inter italic text-[32px] sm:text-[40px] font-[500] leading-tight text-left mb-12">
                    Innovative <span style={{ color: "#2CC5D9" }}>Technologies</span> we Offer
                </h1>
                <p className="font-inter italic text-[16px] sm:text-[20px] font-[500] leading-relaxed text-left mb-16">
                    At Brandsmashers, we work towards offering you excellent IT services and solutions...
                </p>
            </div>
            <div className={`${styles.parent}`}>
                {technologies.map((data, index) => (
                    <div
                        key={index}
                        className={`${styles[`div${index + 1}`]} flex flex-col justify-center items-center ${data.bgColor} text-black rounded-lg transition-transform duration-300 transform hover:scale-105`}
                    >
                        <img src={data.iconSrc} alt="" className="w-12 h-12 object-contain" />
                        <h2 className="mt-2 font-bold text-center text-sm md:text-base lg:text-xl px-1">
                            {data.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyServices;
