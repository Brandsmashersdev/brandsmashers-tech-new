import Image from 'next/image';
import Head from 'next/head';

export default function HealthyDocumentationBlog() {
  return (
    <>
      <Head>
        <title>Healthy Documentation | Blog</title>
        <meta name="description" content="Learn about the importance of healthy documentation in scaling teams" />
      </Head>

      <main className="font-sans text-gray-800 bg-white">
        {/* Hero Section with Overlay */}
        <section className="relative h-96 mb-16">
          <div className="absolute inset-0">
            <Image
              src="/Nav-Dropdown-icons/image_blog.jpg"
              alt="Hero image"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          </div>
          <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Healthy Documentation
              </h1>
              <p className="text-xl text-white font-medium">
                An Unsung Hero of a Scalable Team
              </p>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          {/* Introduction Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-[#ff5010]">
            <p className="text-xl leading-relaxed mb-6">
              What is the most effective method for preserving the vital facts, insightful research, diverse opinions, 
              intricate processes, and impactful outcomes of an organization or product over the long term? 
              Can healthy documentation be the answer to this question?
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Let's talk about a hidden tool of a scalable team. Good documentation doesn't cost much — it's not glamorous. 
              A manner of maintaining it will be enough.
            </p>
            <p className="text-lg leading-relaxed">
              One more important aspect to consider is the "silent cost of bad documentation." This term describes the hidden 
              but significant impact that poor, outdated, or unclear documentation can have on a business. While these costs 
              might not be immediately visible on a balance sheet, addressing them can lead to substantial improvements 
              in productivity, efficiency, and trust within the organization.
            </p>
          </div>

          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/Nav-Dropdown-icons/Blog2.jpg"
              alt="Documentation value"
              width={1200}
              height={700}
              className="w-full object-cover h-96"
            />
          </div>

          {/* Importance of Documentation Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#ff5010] inline-block pb-2 border-b-2 border-[#ff5010]">
              Importance of Good Documentation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Efficiency and Productivity', 
                  text: 'Clear documentation drives efficiency, ensuring teams save time and quickly find answers without the need to reinvent the wheel.' 
                },
                { 
                  title: 'Consistent Knowledge Sharing', 
                  text: 'Documentation solidifies individual insights into collective expertise, making vital information easily accessible to everyone and fostering a culture of collaboration.' 
                },
                { 
                  title: 'Smooth Onboarding', 
                  text: 'With comprehensive documentation, new hires gain clarity and confidence from day one, swiftly mastering processes, tools, and expectations.' 
                },
                { 
                  title: 'Fewer Mistakes', 
                  text: 'Thoroughly documented procedures eliminate confusion and significantly reduce the risk of errors, enhancing quality control and driving excellence.' 
                },
                { 
                  title: 'Compliance and Accountability', 
                  text: 'In fields like finance and healthcare, robust documentation guarantees compliance and streamlines audits and reviews with clear and reliable traceability.' 
                },
                { 
                  title: 'Improved Communication', 
                  text: 'Effective documentation transforms communication, minimizing unnecessary meetings and repetitive questions while empowering teams to collaborate seamlessly, especially in remote or hybrid environments.' 
                },
              ].map((point, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#ff5010]">
                  <h3 className="text-xl font-semibold mb-3 text-[#ff5010]">{point.title}</h3>
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src="/Nav-Dropdown-icons/Blog3.jpg"
              alt="Team collaboration"
              width={1200}
              height={700}
              className="w-full object-cover h-96"
            />
          </div>

          {/* Company Section */}
          <section className="mb-16 bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#ff5010]">
              It would not be wrong to say the key of smooth operations at Brandsmashers is documentation.
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                At Brandsmashers, we believe that great documentation is one of the keys to our success. It's like the backbone of our operations! 
                Without well-organized documentation, even the most talented team members can face challenges.
              </p>
              <p>
                We make it a point to document every step involved in our functions, departments, and collaborations. 
                This approach helps everyone at Brandsmashers feel connected and on the same page.
              </p>
              <p>
                It's more than a piece of information. It acts as a bridge, connecting our internal teams with external partners. Here's what we focus on:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {[
                { title: 'Technical Documentation', text: 'Information about code structure, APIs, and system architecture' },
                { title: 'Project Documentation', text: 'Details on timelines, goals, deliverables, and decision-making processes for our projects' },
                { title: 'Process Documentation', text: 'Insights into our DevOps workflows, testing processes, and CI/CD pipelines' },
                { title: 'Communication Norms', text: 'Guidelines on the tools we use (like Slack and Jira), how to escalate issues, and meeting etiquette' },
                { title: 'Onboarding Documents', text: 'Helpful access guides, system overviews, and security policies for new team members' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow border-l-2 border-[#ff5010]">
                  <h3 className="font-semibold text-[#ff5010]">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-lg font-medium">
              Our ultimate goal is to empower our external team members to get up to speed quickly and work confidently!
            </p>
          </section>

          {/* Tools Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#ff5010] inline-block pb-2 border-b-2 border-[#ff5010]">
              Our Favorite Tools for Better Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Notion', description: 'Perfect for team wikis, project docs, and standard operating procedures (SOPs)' },
                { name: 'Confluence', description: 'A great choice for technical teams and enterprise knowledge bases' },
                { name: 'Google Docs', description: 'Ideal for collaborative writing and flexible formatting' },
                { name: 'GitHub Wiki', description: 'The go-to for anything related to code documentation' },
                { name: 'Scribe', description: 'Automatically generates step-by-step guides for easy reference' },
                { name: 'Read the Docs', description: 'Great for publishing and hosting code documentation' },
              ].map((tool, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-1 bg-[#ff5010]"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{tool.name}</h3>
                    <p className="text-gray-700">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-lg">
              By using these tools, we enhance our documentation practices and boost collaboration across the board. 
              We can assist you in utilizing them by customizing features, simplifying workflows, or integrating seamlessly. 
              Our team ensures each tool is tailored to support your goals efficiently and effectively — with proper documentation.
            </p>
          </section>

          {/* Tools Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-16">
            <Image
              src="/Nav-Dropdown-icons/Blog8.jpg"
              alt="Tools for success"
              width={1200}
              height={700}
              className="w-full object-cover h-96"
            />
          </div>

          {/* Conclusion */}
          <section className="bg-black rounded-xl p-8 shadow-lg border-l-4 border-[#ff5010]">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Con</span><span className="text-[#ff5010]">clusion</span>
            </h2>
            <div className="space-y-4 text-lg text-white">
              <p>
                Through this blog, we aim to highlight a simple yet powerful approach. It's not just a one-day effort; 
                it's a transformative habit.
              </p>
              <p>
                Effective documentation secures your position, empowering you to achieve your goals quickly and hold 
                onto that success for the long run.
              </p>
              <p className="text-2xl font-bold mt-4">
                <span className="text-white">Healthy Documentation Fixed</span> <span className="text-[#ff5010]">Your Owned Crown.</span>
              </p>
              <p className="italic text-xl mt-6 text-[#ff5010]">
                "The palest ink is better than the best memory."
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}