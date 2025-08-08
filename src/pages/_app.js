// src/pages/_app.js
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css"; // your global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
    
  
            {/* Google Tag Manager */}
      <Head>
        <title>Brandsmashers Tech - Custom Software Development & IT Solutions</title>
        <meta name="description" content="Brandsmashers Tech offers innovative custom software development, IT outsourcing, and scalable web & mobile app solutions. Expert developers for hire." />
        <meta name="keywords" content="custom software development, web development, mobile app development, IT outsourcing, remote developers, React, Node.js, Python, Java" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brandsmashers Tech - Custom Software Development" />
        <meta property="og:description" content="Innovative custom software development and IT solutions. Expert developers for hire." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brandsmashers Tech" />
        <meta name="twitter:description" content="Custom software development and IT solutions" />
        <link rel="icon" href="/logo.jpg" />
        <link rel="canonical" href="https://brandsmashers.tech" />
      </Head>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMM4SMCF');
          `,
        }}
      />

      {/* GTM (noscript fallback for non-JS users) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MMM4SMCF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
