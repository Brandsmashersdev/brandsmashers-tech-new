'use client';

import Image from "next/image";
import Link from "next/link";

export default function CareersSection() {

  const perks = [
    {
      title: "Comprehensive Health Plan",
      image: "/Nav-Dropdown-icons/health.png"
    },
    {
      title: "On Demand Learning & Development",
      image: "/Nav-Dropdown-icons/learning.png"
    },
    {
      title: "Work Life Balance",
      image: "/Nav-Dropdown-icons/life.jpg"
    },
    {
      title: "Supportive Organizational Structure",
      image: "/Nav-Dropdown-icons/organization.jpg"
    },
    {
      title: "Recognition & Reward System",
      image: "/Nav-Dropdown-icons/Achieve.png"
    }
  ];

  const jobs = [
    // { title: "Android Developer", openings: 3, location: "Remote / India" },
    // { title: "React JS Developer", openings: 2, location: "Remote / India" },
    // { title: "Next JS Developer", openings: 2, location: "Remote / India" },
    // { title: "Node JS Developer", openings: 3, location: "Remote / India" },
    // { title: "Python Developer", openings: 1, location: "Remote / India" },
    // { title: "SEO Specialist", openings: 2, location: "Remote / India" }
  ];

  return (
    <>

      {/* PERKS SECTION */}
      <section className="bg-white py-14 px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Enjoy Great <span className="text-[#ff5010]">Benefits & Perks</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">

          {perks.map((perk, index) => (

            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >

              <Image
                src={perk.image}
                alt={perk.title}
                width={100}
                height={100}
                className="mb-4 object-contain"
              />

              <p className="font-semibold text-gray-800 text-sm md:text-base">
                {perk.title}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* JOB LISTINGS */}
      <section className="bg-gray-50 py-16 px-4">

        <h2 className="text-4xl font-bold text-center mb-10">
          Current <span className="text-[#ff5010]">Open Positions</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow divide-y">

          {jobs.length > 0 ? (

            jobs.map((job) => (

              <div
                key={job.title}
                className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
              >

                <div>

                  <h3 className="font-semibold text-lg">
                    {job.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {job.openings} Openings • {job.location}
                  </p>

                </div>

                <Link
                  href="/contactus"
                  className="bg-[#ff5010] text-white px-5 py-2 rounded-md text-sm hover:bg-[#e04509]"
                >
                  Apply Now
                </Link>

              </div>

            ))

          ) : (

            <div className="text-center py-10">

              <h3 className="text-xl font-semibold mb-2">
                No open positions right now
              </h3>

              <p className="text-gray-600">
                Send your resume to{" "}
                <a
                  href="mailto:careers@brandsmashers.com"
                  className="text-[#ff5010]"
                >
                  careers@brandsmashers.com
                </a>
              </p>

            </div>

          )}

        </div>


        {/* LINKEDIN JOBS */}
        <div className="text-center mt-8">

          <a
            href="https://www.linkedin.com/company/brandsmashers-tech-llp/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff5010] font-semibold hover:underline"
          >
            View More Positions on LinkedIn →
          </a>

        </div>

      </section>

    </>
  );
}