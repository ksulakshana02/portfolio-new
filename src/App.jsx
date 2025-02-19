import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kaveesha Sulakshana | Full-Stack Developer</title>
          <meta name="description" content="Portfolio of Kaveesha Sulakshana, a passionate Full-Stack Developer specializing in React, Next.JS, Express.js, and modern web technologies. Explore my projects and skills." />
          <meta name="keywords" content="Kaveesha Sulakshana, Kaveesha, Sulakshana, Full Stack Developer, React, Next.js, Express.js, Spring Boot, Software Engineer, Portfolio, Web Development" />
          <meta name="author" content="Kaveesha Sulakshana" />
          <link rel="canonical" href="https://kaveesha-sulakshana.vercel.app/" />

          <meta property="og:title" content="Kaveesha Sulakshana | Full-Stack Developer" />
          <meta property="og:description" content="Portfolio of Kaveesha Sulakshana, a passionate Full-Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects and skills." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kaveesha-sulakshana.vercel.app/" />
          <meta property="og:image" content="https://kaveesha-sulakshana.vercel.app/assets/boy.jpg" />
          <meta property="og:image:alt" content="Kaveesha Sulakshana - Full-Stack Developer Portfolio" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kaveesha Sulakshana | Full-Stack Developer" />
          <meta name="twitter:description" content="Portfolio of Kaveesha Sulakshana, a passionate Full-Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects and skills." />
          <meta name="twitter:image" content="https://kaveesha-sulakshana.vercel.app/assets/boy.jpg" />
          <meta name="twitter:image:alt" content="Kaveesha Sulakshana - Full-Stack Developer Portfolio" />

          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kaveesha Sulakshana",
              "jobTitle": "Full-Stack Developer",
              "url": "https://kaveesha-sulakshana.vercel.app/",
              "image": "https://kaveesha-sulakshana.vercel.app/assets/boy.jpg",
              "sameAs": [
                "https://github.com/ksulakshana02",
                "https://www.linkedin.com/in/ksulakshana"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer"
              }
            }
          `}
          </script>
        </Helmet>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App
