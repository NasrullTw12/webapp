import React, { Suspense, lazy } from "react";

const KontakContent = lazy(() => import("./components/KontakContent"));

const Kontak = () => (
  <Suspense fallback={<div></div>}>
    <KontakContent />
  </Suspense>
);

export default Kontak;
