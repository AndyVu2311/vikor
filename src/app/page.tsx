import Image from 'next/image';
import Hero from './components/Home/Hero';
import OurWorks from './components/Home/OurWorks';
import HomeScrollStack from './components/Home/HomeScrollStack';
import TextAndImage from './components/Home/Stack';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero components */}
      <Hero />
      {/* Our Works components */}
      <OurWorks />
      <TextAndImage />
    </>
  );
}
