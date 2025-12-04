import Blogsection6 from "@/components/Company/Blogsection6";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const blogs = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700 text-base sm:text-lg leading-relaxed">
        <p>
          Day 1 captured the palpable energy on the GITEX floor as innovations across AI, robotics, and quantum tech proved the future is already unfolding.
          Day 2 shifted to the intelligence economy, spotlighting sovereign clouds, AI factories, and edge AI as the new digital infrastructure.
          Day 3 pivoted toward human-centric intelligence where brain-computer implants, CRISPR breakthroughs, and sustainable AI underscored technology&apos;s purpose.
          Day 4 celebrated collaboration, showing how global partnerships and responsible governance drive meaningful transformation.
          Day 5 closed the week by translating vision into action, emphasizing AI-first strategies, resilient infrastructure, and solutions that uplift humanity.
        </p>
      </section>
      <Blogsection6 />
      <Footer />
    </div>
  );
};

export default blogs;
