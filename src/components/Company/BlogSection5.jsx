import React from "react";
import Image from "next/image";

export default function BengaluruTechSummit2025Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
            <span className="text-white font-semibold text-xs tracking-wide uppercase">
              Bengaluru Tech Summit 2025
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight px-2">
            Brandsmashers Tech at Bengaluru Tech Summit 2025:{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              A Three-Day Journey of Innovation, Connections and Future-Ready
              Insights
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A Three-Day Journey of Innovation, Connections and Future-Ready
            Insights
          </p>
        </div>

        <div className="hidden sm:block absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg"></div>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-3">
            The Bengaluru Tech Summit (BTS) 2025, held from 18–20 November at
            BIEC, once again reinforced why it is one of Asia&apos;s most
            influential platforms for technology, innovation and global
            collaboration. With the theme &quot;FutuRise&quot;, the summit
            brought together over 1,000 exhibitors, 600+ speakers, 100+ sessions
            and delegations from 60+ countries. This created a dynamic
            environment for founders, innovators, policymakers and enterprises.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            For Brandsmashers Tech, participating at BTS 2025 was not just an
            exhibition. It was an opportunity to showcase our capabilities,
            connect with global leaders and immerse ourselves in conversations
            shaping the future of technology.
          </p>
        </section>

        {/* Day Sections */}
        {[
          {
            title: "Day 1: Setting the Stage and First Impressions",
            content: `Day 1 of the Bengaluru Tech Summit 2025 opened with high energy and a sense of anticipation, reflecting the scale and importance of the event. The grand inaugural session, attended by senior leaders from the Karnataka Government along with prominent industry icons, set a strong tone for three days of innovation-focused dialogue and collaboration. The Brandsmashers Tech team began the day by setting up its booth at Hall 1, Booth A154, designed with a clean and futuristic aesthetic that clearly represented our core service offerings—custom software development, AI and automation solutions, UI/UX design and IT staff augmentation. As the venue filled with visitors, the booth quickly drew attention and became a point of active engagement. Early interactions included startup founders exploring scalable app development, enterprises seeking reliable long-term technology partners and students eager to gain insights into AI-driven digital solutions. Alongside booth engagements, our team attended the inaugural "FutuRise" keynote and multiple opening sessions that focused on AI advancements and foundation models, India's semiconductor mission, the evolution of digital public infrastructure and global collaboration in deep tech. These discussions offered valuable strategic insights, helping us better understand emerging technology trends and reinforcing our direction for shaping the Brandsmashers Tech roadmap for 2025–2026.

Day 1 Takeaway
The first day helped us understand the sheer scale of the summit. It validated that Brandsmashers Tech is aligned with the global shift toward AI-led innovation.`,
            img: "/Images/image1.jpeg",
          },
          {
            title:
              "Day 2: High-Energy Interactions, Deep Tech Dialogues and Ecosystem Buzz",
            content: `Day 2 of Bengaluru Tech Summit 2025 was the most vibrant and high-impact, with the venue buzzing with investors, global delegates, corporate technology leaders and hundreds of startups operating at full momentum. Brandsmashers Tech experienced strong engagement through live product showcases and demonstrations, including AI-powered workflow automation solutions, custom enterprise dashboards, real-time data visualization tools and a preview of our upcoming digital marketing platform, Syra. These hands-on demos generated in-depth discussions with CTOs, product managers and enterprise teams focused on digital transformation and operational efficiency. The day was also marked by valuable networking opportunities, leading to conversations with IT consulting firms exploring offshore development partnerships, VC-backed startups seeking on-demand engineering teams and international delegations interested in collaborations across AI, cloud and fintech. The InterlinX B2B networking zone played a key role in enabling focused, outcome-driven meetings, many of which progressed toward immediate follow-ups. Despite the high visitor volume, our team efficiently managed booth operations through a structured engagement workflow that ensured seamless demos, attentive interactions and accurate lead capture in our CRM. Additionally, our representatives attended deep-dive sessions across AI and responsible tech, spacetech and defense, fintech innovations, climate and sustainability, and biotech and healthtech, gaining insights that directly support our clients building scalable, global-ready technology solutions.`,
            img: "/Images/image2.jpeg",
          },
          {
            title:
              "Day 3: Founder Energy, Meaningful Wrap-Up and Future Makers Conclave",
            content: `The final day of Bengaluru Tech Summit 2025 brought together the most vibrant and inspiring elements of the event, with founders, creators, students and innovation enthusiasts actively engaging across the venue. A key highlight was the Future Makers Conclave, which featured insightful fireside chats with unicorn founders, student innovation challenges, startup awards and cultural performances that marked a celebratory close to the summit. These sessions strongly emphasized resilience, problem-solving and experimentation—values that closely align with the culture and vision of Brandsmashers Tech. The day also focused on concluding and strengthening discussions initiated over the first two days, with the team finalizing follow-up meetings, gaining deeper clarity on enterprise client requirements and sharing tailored proposals and product roadmaps. In addition, interactions with young developers, student innovators and creators participating in initiatives such as the Rural IT Quiz, BioQuiz and student-led robotics and AI demonstrations highlighted the depth of India’s emerging tech talent. Their enthusiasm and creativity reinforced India’s position as a global technology leader. Overall, Day 3 played a crucial role in solidifying relationships, aligning future opportunities and setting a strong foundation for long-term partnerships beyond the summit.`,
            img: "/Images/image3.jpeg",
          },
        ].map((day, i) => (
          <section
            key={i}
            className="mb-12 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 mr-3"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                {day.title}
              </h2>
            </div>
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {day.content}
            </div>
            {day.img && (
              <div className="mt-6 rounded-lg overflow-hidden shadow-lg w-full">
                <Image
                  src={day.img}
                  alt={`${day.title} image`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  priority={i === 0}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
          </section>
        ))}

        {/* Highlights and Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">
            Highlights and Key Takeaways for Brandsmashers Tech
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            BTS 2025 provided several strategic advantages and key learnings.
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <li>
              <strong>A Clear View of Where Tech Is Heading</strong>
              <br />
              AI, automation, semiconductors, fintech infrastructure and
              spacetech emerged as the core pillars shaping the next decade.
            </li>
            <li>
              <strong>Strong Demand for IT Staff Augmentation</strong>
              <br />
              Conversations with global firms made one thing clear. Startups and
              enterprises need flexible, scalable teams, fast. This validated
              our focus on on-demand developer hiring.
            </li>
            <li>
              <strong>Startups Are Prioritizing Speed and Scalability</strong>
              <br />
              Founders emphasized rapid prototyping, MVP development and
              cost-efficient engineering. These are areas where Brandsmashers
              Tech already excels.
            </li>
            <li>
              <strong>
                India&apos;s Tech Ecosystem Is More Global Than Ever
              </strong>
              <br />
              With delegations from 60+ countries, global collaboration is
              accelerating. This opens new opportunities in cross-border
              partnerships.
            </li>
            <li>
              <strong>Deep-Tech Sectors Are Rising</strong>
              <br />
              Healthtech, spacetech, agritech and climate tech showcased
              groundbreaking innovations. This indicates new markets for AI and
              software development.
            </li>
          </ol>
        </section>

        {/* Conclusion */}
        <section className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-black text-white rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Conclusion: A Transformative Experience with a Future-Ready Vision
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Bengaluru Tech Summit 2025 offered a clear perspective on the
              future of technology, with AI, automation, semiconductors, fintech
              infrastructure and spacetech emerging as the core pillars shaping
              the next decade. Interactions with global enterprises and startups
              highlighted a strong and growing demand for IT staff augmentation,
              reinforcing the need for flexible, scalable engineering teams and
              validating Brandsmashers Tech&apos;s focus on on-demand developer
              hiring. Startup founders consistently emphasized speed, rapid
              prototyping, MVP development and cost-efficient engineering—areas
              where Brandsmashers Tech already delivers strong value. The
              presence of delegations from over 60 countries underscored how
              India&apos;s tech ecosystem is becoming increasingly global,
              unlocking new opportunities for cross-border collaboration.
              Additionally, the rapid rise of deep-tech sectors such as
              healthtech, agritech, climate tech and spacetech pointed to
              expanding markets where AI-driven and software-led innovation will
              play a critical role.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
