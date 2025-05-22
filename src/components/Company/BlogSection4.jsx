import Image from 'next/image';
import Head from 'next/head';

export default function BlueTokaiBlog() {
  return (
    <>
      <Head>
        <title>From Branding to Brandsmashers :</title>
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 font-sans text-gray-800">
        {/* Hero Section */}
        <div className="mb-10">
          <Image
            src="/Nav-Dropdown-icons/Blog17.png"
            alt="Blue Tokai Blog Hero"
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold mt-6">
            From Branding to Brandsmashers :
          </h1>
        </div>

        {/* Content Section */}
        <section className="space-y-6 text-[17px] leading-8">
          <p>
            &quot;In the midst of every crisis, lies great opportunity.&quot; This quote well explains the
            establishment of Brandsmashers Tech. During the uncertainty of the COVID-19 pandemic, as
            the world came to a halt, a bold vision was born. While businesses closed and routines
            shifted overnight, the founders saw not just disruption but opportunity.
          </p>
          <p>
            Bhopal, a city of lakes, holds great potential for growth. While it boasts several
            engineering colleges, the job market hasn&rsquo;t kept up with the talent being developed.
            Brandsmashers Tech aimed to bridge this gap by creating employment opportunities locally,
            reducing the need for migration.
          </p>
          <p>
            Why were we named Brandsmashers? It started as a marketing and branding initiative, not
            staff augmentation. Our evolution into a leading software development company reflects
            our adaptability and grit. From a handful of employees to a thriving team, the journey
            involved late nights, tight deadlines, and minimal resources&mdash;but also deep partnerships
            and trust.
          </p>

          <h3 className="text-xl font-semibold">Key Collaborations:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dell – Information Technology / Hardware &amp; Software</li>
            <li>Sagas AI – Artificial Intelligence / Web3 / Storytelling</li>
            <li>Centric – Financial Technology / Blockchain</li>
            <li>Turing – Staff Augmentation / Remote Tech Hiring</li>
            <li>Accion Labs – Web3 / Blockchain Development</li>
            <li>Eventbrite – Event Management / SaaS</li>
            <li>Go Easy – Financial Services / Consumer Lending</li>
            <li>Tear It Up – Lifestyle / Fashion / Media</li>
            <li>Krispy Kreme – Food &amp; Beverage / QSR</li>
          </ul>

          <p>
            These partnerships taught us something new with each project. What began with a few
            people is now a team of 70+. It hasn&rsquo;t been easy&mdash;we&rsquo;ve invested time, energy, and
            personal funds&mdash;but our perseverance fueled each new chapter.
          </p>

          <Image
            src="/Nav-Dropdown-icons/Blog16.jpg"
            alt="Founders"
            width={1200}
            height={700}
            className="rounded-lg w-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-10">Tools We Started With:</h2>
          <p>
            &quot;When speed, scalability, and a JavaScript-centric approach are paramount, MERN stands
            out.&quot; We began our journey with the MERN stack, React Native, and WordPress&mdash;empowering
            us to deliver versatile digital solutions.
          </p>

          <p>Today, our expertise spans across:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Front-End Development:</strong> React.js, Angular, Vue.js, Next.js &ndash; For
              responsive UIs.
            </li>
            <li>
              <strong>Back-End Development:</strong> Node.js, Python, Laravel, Java &ndash; For scalable
              server-side systems.
            </li>
            <li>
              <strong>Mobile Development:</strong> Flutter, React Native, Swift, Kotlin &ndash; For
              cross-platform and native apps.
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Seamless handling of both frontend and backend.
            </li>
            <li>
              <strong>AI/ML and Data Science:</strong> Using data-driven insights for intelligent
              solutions.
            </li>
            <li>
              <strong>DevOps &amp; Cloud Engineering:</strong> Still expanding our capabilities in this area.
            </li>
          </ul>

          <Image
            src="/Nav-Dropdown-icons/Blog13.jpg"
            alt="Tech Tools"
            width={1200}
            height={600}
            className="rounded-lg w-full object-cover"
          />

          <h2 className="text-2xl font-bold mt-10">Sky&apos;s the Limit &mdash; This is Just the Beginning</h2>
          <p>
            Our ambition is to become a trusted engineering partner for global enterprises, solving
            complex problems through innovation and collaboration. We aim to drive digital
            transformation with scalable, intelligent solutions.
          </p>

          <p>
            <strong>&quot;Evolution with Struggle&quot;</strong> &ndash; the mantra of our founder Aayush Jain. Our
            journey reflects resilience, learning, and relentless pursuit of growth.
          </p>

          <p>
            <strong>&quot;Youth and Energy&quot;</strong> &ndash; the philosophy of co-founder Muskan Chhatrasal. She
            believes in the power of young changemakers with bold ideas and a hunger for innovation.
          </p>

          <p>
            <em>&quot;In times of uncertainty, we bring certainty through skill.&quot;</em>
          </p>

          <Image
            src="/Nav-Dropdown-icons/Blog14.jpg"
            alt="Vision"
            width={500}
            height={300}
            className="rounded-lg w-full object-cover"
          />
        </section>
      </main>
    </>
  );
}
