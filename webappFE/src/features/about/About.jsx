import React, { Suspense, lazy } from "react";

const AboutContent = lazy(() => import ( "./components/AboutContent"));
const AboutContent1 = lazy(() => import ( "./components/AboutContent1"));
const AboutContent2 = lazy(() => import ( "./components/AboutContent2"));
const About = () => {
  return (
  <Suspense fallback={<div></div>}>
      <AboutContent />
      <AboutContent2 />
      <AboutContent1 />
    </Suspense>
  );
};

export default About;
