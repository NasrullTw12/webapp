import React, { Suspense, lazy } from "react";

// Lazy load OurTeamContent secara spesifik, bukan folder
const OurTeamContent = lazy(() => import("./components/OurTeamContent"));

const OurTeam = () => (
  <Suspense fallback={<div>Loading Our Team...</div>}>
    <OurTeamContent />
  </Suspense>
);

export default OurTeam;
