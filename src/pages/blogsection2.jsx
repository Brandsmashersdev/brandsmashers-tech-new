import React from "react";

const BlogSection2 = () => {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">
        Understanding &quot;React&quot; and Its Core Concepts
      </h2>
      <p className="text-lg text-gray-700">
        In this blog, we explore the key features of &quot;React&quot;, including components,
        hooks, and JSX. React makes building user interfaces easy and efficient.
      </p>

      <blockquote className="mt-4 italic text-gray-500">
        &ldquo;React is not a framework, it&apos;s a library for building UI&rdquo;
      </blockquote>

      <p className="mt-4">
        Always remember, readability matters. Avoid writing things like "Hello World"
        without escaping quotes in JSX.
      </p>
    </section>
  );
};

export default BlogSection2;
