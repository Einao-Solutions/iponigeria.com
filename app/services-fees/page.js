import React from "react";
import ReusableHerosection from "../components/ReusableHerosection";
import ScrollAnimation from "../components/ScrollAnimation";
import ServiceFees from "../components/ServiceFees";

const page = () => {
  return (
    <main>
      <ReusableHerosection title="Services & Fees" />
      <ScrollAnimation>
        <section className="mx-auto w-5/6">
          <ServiceFees />
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;
