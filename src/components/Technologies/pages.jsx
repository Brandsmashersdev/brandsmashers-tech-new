export default function IndustryPage({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold capitalize mb-4">
        {slug.replace("-", " ")} Solutions
      </h1>

      <p className="text-gray-400">
        We provide innovative technology solutions for the {slug.replace("-", " ")} industry.
      </p>
    </div>
  );
}