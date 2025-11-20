import React, { Suspense, lazy } from "react";

const HomeContent = lazy(() => import ("./components/HomeContent"));
const HomeContent1 = lazy(() => import ("./components/HomeContent1"));
const HomeContent2 = lazy(() => import ("./components/HomeContent2"));
const HomeContent3 = lazy(() => import ("./components/HomeContent3"));
const HomeContent4 = lazy(() => import ("./components/HomeContent4"));

const Home = () => (
  <Suspense fallback={<div></div>}>
     <HomeContent />
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3/>
      <HomeContent4 />
  </Suspense>
);

export default Home;
