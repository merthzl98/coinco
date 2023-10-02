import { Suspense } from "react";

import Greetings from "./Greetings";
import MajorCoins from "./MajorCoins";
import WhyChooseUs from "./WhyChooseUs";

export const Home = () => (
  <main>
    <Suspense fallback={<p>Loading feed...</p>}>
      <section>
        <Greetings />
        <MajorCoins />
      </section>
    </Suspense>
    <section>
      <WhyChooseUs />
    </section>
  </main>
);
