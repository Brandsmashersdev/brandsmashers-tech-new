// components/TechGrid.js
const techStack = [
    
  
    
    { name: ".NET", logo: "/logos/dotnetlogo.png" },
    { name: "Java", logo: "/logos/JavaLogo.png" },
    { name: "Python", logo: "/logos/PythonLogo.png" },
    { name: "Node.js", logo: "/logos/nodejslogo.png" },
    { name: "PHP", logo: "/logos/phplogo.png" },
    { name: "Django", logo: "/logos/djangologo.png" },
    
    { name: "VB.NET", logo: "/logos/vblogo.png" },
    { name: "Angular", logo: "/logos/angularlogo.png" },
    { name: "React", logo: "/logos/reactlogo.png" },
    { name: "Vue", logo: "/logos/vuelogo.png" },
    { name: "ExtJS", logo: "/logos/extjslogo.png" },
   
    { name: "Laravel", logo: "/logos/laravellogo.png" },
  ];
  
  export default function TechGrid() {
    return (
      <section className="py-10 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary mb-8 text-black">
          Web Technologies We Use

        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 mb-3 object-contain"
              />
              <span className="text-sm text-center font-medium text-black">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  