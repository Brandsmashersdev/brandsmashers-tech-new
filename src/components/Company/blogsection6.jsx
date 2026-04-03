import React from "react";
import Image from "next/image";

export default function Gitex2025DubaiBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
            <span className="text-white font-semibold text-xs tracking-wide uppercase">
              GITEX 2025 Dubai Recap
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight px-2">
            GITEX 2025 Dubai:{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              The Future of Technology and Humanity
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A 5-Day Journey with Brandsmashers Tech exploring AI, Quantum,
            Sovereign Clouds, and Human-Centric Innovation shaping the new
            world.
          </p>
        </div>

        <div className="hidden sm:block absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Main Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-3">
            When the Brandsmashers Tech team arrived at GITEX 2025 Dubai, we
            weren’t just attending another tech conference — we were stepping
            into a living, breathing ecosystem of ideas shaping the future of
            humanity.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            This year’s theme wasn’t about what’s next; it was about what’s now.
            From AI innovation and quantum computing to sovereign clouds and
            physical AI, every corner of GITEX echoed one message: the future of
            technology is no longer abstract — it’s alive.
          </p>
        </section>

        {/* Day Sections */}
        {[
          {
            title: "Day 1 – The Future Isn’t Coming, It’s Already Here",
            text: `The first day at GITEX 2025 was electrifying. As the doors opened, we could feel the pulse of thousands of innovators ready to redefine reality. The exhibition floor was a window into tomorrow, showcasing breakthroughs in AI, Crypto, Virtual Reality, Robotics, and Quantum Computing. These weren’t theoretical concepts; they were tangible technologies shaping everyday life. We were particularly inspired by HurayPositive from South Korea, which demonstrated how AI-driven precision medicine can revolutionize healthcare outcomes. Then came Tensor’s agentic AI on wheels, dubbed the world’s first personal robocar, and K2’s humanoid robots designed for industrial applications. Every booth reflected the same truth: we’re already living in the future. But beyond the spectacle, the real learning was clear: true innovation isn’t about novelty; it’s about utility. The most impactful solutions were those that solved real problems, especially in healthcare, logistics, and infrastructure. That’s where our own focus sharpened, developing AI solutions that are trustworthy, ethical, and practical. The day reminded us that while innovation builds excitement, responsibility builds trust, and trust is what sustains progress.`,
            img: "/showcase-pic4.png",
          },
          {
            title: "Day 2 – Entering the Intelligence Economy Era",
            text: `If Day 1 was about feeling the future, Day 2 was about understanding it. The conversations at GITEX shifted from hype to purpose. Across sessions, one idea kept surfacing: the world isn’t just going digital anymore; it’s becoming intelligent. From sovereign data policies to AI-driven workforce models, the global narrative was clear. Technology is no longer just a tool; it’s the economic infrastructure of the modern world. We saw the rise of Sovereign Clouds, where countries like the UAE and Saudi Arabia are ensuring their data stays within borders. Companies such as AWS, Google, and Huawei showcased how AI-ready infrastructures are powering these new digital economies. And then came AI Factories, large-scale data centers acting as the power plants of the future. They’re not just about computing speed; they represent national capability, policy control, and innovation sovereignty. The other breakthrough was the rise of Edge AI, where intelligence moves closer to the source. AI-powered patrol cars, medical edge devices, and autonomous drones showed how intelligence is becoming physical, tangible, and immediate. At Brandsmashers Tech, we took this as a sign to continue evolving our own systems, building AI copilots, automation-first delivery models, and value-based outcomes that align with this new intelligence economy. Because tomorrow’s success won’t just depend on how fast we code, but how intelligently we integrate.`,
            img: null,
          },
          {
            title: "Day 3 – The Human-Centric Intelligence Pivot",
            text: `By the third day, something shifted. The tone of GITEX became more introspective, less about machines and more about meaning. Day 3, themed around Digital Intelligence Infrastructure, explored how technology could rebuild something we’ve been losing: human connection, empathy, and trust. Inside the DigiHealth and Biotech halls, innovation met humanity. We witnessed Paradromics’ Connexus, a brain-computer implant that restores lost communication for people with paralysis. The demo moved the entire audience. We also heard from Mammoth Biosciences, where CRISPR and AI are joining forces to accelerate genetic discoveries and disease cures. It was clear the conversation had shifted from automation to augmentation. Meanwhile, the infrastructure discussions focused on Sovereign AI and the Data Commons approach. The challenge ahead is finding a balance to secure data sovereignty while fostering global collaboration. Sustainability also emerged as a critical theme. With AI consuming vast energy, solutions like graphene-based ultracapacitors by Skeleton Technologies highlighted a new frontier in green intelligence. Day 3 also introduced Agentic AI, capable of autonomous reasoning and decision-making. These systems promise massive efficiency but require new layers of AI safety, transparency, and governance. As we walked through those halls, one message resonated deeply with us: The future of AI is not just about power, it’s about purpose.`,
            img: "/1. GITEX GLOBAL 1.jpeg",
          },
          {
            title: "Day 4 – Collaboration Meets the Future",
            text: `Day 4 at GITEX Global 2025 was all about connection. The event floor was alive with energy as entrepreneurs, investors, and global enterprises came together to build the partnerships that will shape the next decade. For Brandsmashers Tech, this was a proud moment. Seeing Indian startups showcasing groundbreaking innovations on a global stage reflected the unstoppable energy of our nation’s tech ecosystem. The day was officially “Partner Day,” focusing on collaboration, governance, and responsible growth. Discussions from Microsoft, Huawei, and Core42 emphasized that true progress depends on secure, ethical, and resilient innovation. In the Physical AI and Robotics zones, the future looked remarkably human. From Dubai’s trackless trams to AI-powered patrol cars and autonomous healthcare robots, technology was merging seamlessly with daily life. Yet what stood out most wasn’t the technology itself; it was the collaboration behind it. Every successful innovation was built by diverse teams working toward shared goals. As we spoke with founders, engineers, and thinkers from around the world, one truth became evident: the next era of technology will be shaped by partnerships, not competition. Day 4 reminded us that at the heart of digital transformation lies human connection, and that’s where true innovation begins.`,
            img: null,
          },
          {
            title: "Day 5 – The Bridge Between Vision and Action",
            text: `The final day of GITEX 2025 felt different. The buzz of announcements had softened into reflection, the rush of exploration replaced by quiet conversations and meaningful connections. Day 5 was about what comes next. The discussions centered on implementation, sustainability, and real-world impact. Thought leaders from around the world agreed that the future belongs to those who can turn vision into action. At the Future Vision Forum, speakers from IBM, OpenAI, and G42 shared how organizations must now move from AI pilots to AI-first business strategies, systems that learn, adapt, and deliver value continuously. For Brandsmashers Tech, this message hit home. Over the week, we had witnessed the power of AI, the responsibility of ethics, and the importance of human-centered innovation. Day 5 tied it all together: AI is only as strong as the infrastructure behind it. Innovation is only meaningful when it solves real human problems. Partnerships are the true foundation of progress. The final hours of GITEX were filled with heartfelt exchanges between innovators who began as strangers and left as collaborators. Ideas turned into roadmaps, and conversations turned into commitments. As the lights dimmed, we realized that this wasn’t the end of an event; it was the beginning of a movement. A movement toward technology that doesn’t just advance, but uplifts. Day 5 wasn’t about what we saw; it was about what we’ll build next.`,
            img: "/GITEX Connecting images .png",
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
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 whitespace-pre-line">
              {day.text}
            </div>
            {day.img && (
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={day.img}
                  alt={day.title}
                  className="w-full h-auto object-contain"
                  width={400}
                  height={300}
                />
              </div>
            )}
          </section>
        ))}

        {/* Conclusion */}
        <section className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-black text-white rounded-xl sm:rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              The Future is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Human
              </span>
              , and We’re Ready to Build It
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              GITEX 2025 Dubai wasn’t just a showcase of the future of
              technology; it was a mirror reflecting humanity’s deepest
              aspirations. Across five days, we saw the rise of AI innovation,
              the expansion of digital transformation, and the growing emphasis
              on AI and human intelligence working together.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              But more importantly, we felt a shift from technology as a tool to
              technology as a partner. At Brandsmashers Tech, we return home
              with more than insights. We return with a mission: To create
              systems that are intelligent yet ethical, scalable yet
              sustainable, and above all, human at their core.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              Because the true future of technology isn’t measured by how
              advanced it becomes, but by how deeply it understands and serves
              the people who use it.
            </p>
            <p className="mt-6 text-orange-400 font-semibold text-base sm:text-lg">
              By Team Brandsmashers Tech
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base italic">
              Building intelligent, ethical, and human-centered digital
              solutions that shape a better tomorrow.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
