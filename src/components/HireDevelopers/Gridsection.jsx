"use client";
import styles from "./Gridsection.module.css";

const Griddsection = () => {
    const technologies = [
        { title: ".NET", bgColor: "bg-purple-100", iconSrc: "/net-icon.png" },
        { title: "Backbone ", bgColor: "bg-yellow-200", iconSrc: "/backbone-icon.png" },
        { title: "Android", bgColor: "bg-green-100", iconSrc: "/android-icon.png" },
        { title: "C/C++", bgColor: "bg-blue-200", iconSrc: "/cpp-icon.png" },
        { title: "Amazon", bgColor: "bg-yellow-100", iconSrc: "/aws-icon.png" },
        { title: "Angular", bgColor: "bg-pink-100", iconSrc: "/angular-icon.png" },
        { title: "ASP.NET", bgColor: "bg-blue-100", iconSrc: "/aspnet-icon.png" },
        { title: "Azure", bgColor: "bg-sky-200", iconSrc: "/azure-icon.png" },
        { title: "Backend", bgColor: "bg-green-200", iconSrc: "/backend-icon.png" },
        { title: "Blockchain", bgColor: "bg-yellow-300", iconSrc: "./blockchain-icon.png" },
    ];

    return (
        <div className="text-white py-8 tech mt-8 relative overflow-hidden mx-auto w-4/5">
           
            <div className={`${styles.parent}`}>
                {technologies.map((data, index) => (
                    <div
                        key={index}
                        className={`${styles[`div${index + 1}`]} flex flex-col justify-center items-center ${data.bgColor} text-black rounded-md transition-transform duration-300 transform hover:scale-105`}
                    >
                        <img src={data.iconSrc} alt="" className="w-12 h-12 object-contain" />
                        <h2 className="mt-2 font-bold text-center text-sm md:text-base lg:text-xl px-1 font-inter italic ">
                            {data.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Griddsection;
