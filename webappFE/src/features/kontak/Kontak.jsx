import React, { Suspense, lazy } from "react";

// Lazy load KontakContent
const KontakContent = lazy(() => import("./components/KontakContent"));

const Kontak = () => (
  <Suspense fallback={<div>Loading Contact Page...</div>}>
    <KontakContent />
  </Suspense>
);

export default Kontak;
