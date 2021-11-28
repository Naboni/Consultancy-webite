import type { NextPage } from "next";

// components
import Hero from "@/components/home/Hero/Hero";
import StudyDestination from "@/components/home/Study/StudyDestination";
import Service from "@/components/home/Services/Service";
import About from "@/components/home/About/About";
import Faq from "@/components/home/Faq/Faq";
import Reason from "@/components/home/Reason/Reason";
import Join from "@/components/home/Join/Join";
import Testimonial from "@/components/home/Testimonial/Testimonial";
import Partners from "@/components/home/Partners/Partners";
import ContactUs from "@/components/home/Contact/ContactUs";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <StudyDestination />
      <Service />
      <About />
      <Reason />
      <Join />
      <Testimonial />
      <Partners />
      <Faq />
      <ContactUs />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
