import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCardType?: string;
  children?: React.ReactNode;
}

const defaultTitle = 'Brandsmashers Tech';
const defaultDescription =
  'Brandsmashers Tech offers innovative custom software development, IT outsourcing, and scalable web & mobile app solutions.';
const defaultOgImage = '/logo.jpg';
const defaultOgType = 'website';
const defaultTwitterCardType = 'summary_large_image';
const siteUrl = 'https://brandsmashers.com'; // Update to your production URL

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Brandsmashers Tech',
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  sameAs: [
    'https://www.linkedin.com/company/brandsmashers/',
    'https://www.instagram.com/brandsmashers/',
    'https://twitter.com/brandsmashers',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-7000863918',
      contactType: 'customer service',
      email: 'info@brandsmashers.com',
    },
  ],
};

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  canonical,
  ogImage = defaultOgImage,
  ogType = defaultOgType,
  twitterCardType = defaultTwitterCardType,
  children,
}: SEOProps) => {
  const router = useRouter();
  const canonicalUrl = canonical || `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {children}
    </Head>
  );
};

export default SEO;
