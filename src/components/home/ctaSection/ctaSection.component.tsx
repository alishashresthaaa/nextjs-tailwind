import React from "react";
import ButtonComponent from "src/components/button/button.component";

const CTASection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white bg-white dark:bg-slate-800 rounded-lg border dark:border-gray-700">
      <div className="sm:px-6 lg:py-16  lg:flex lg:items-center lg:justify-between ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
          <span className="block">Ready to connect?</span>
          <span className="block text-indigo-600 dark:text-indigo-400 ">
            Watch our development session
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <ButtonComponent label="Get Started" onClick={() => alert(1)} />

          <ButtonComponent
            label="Learn More"
            onClick={() => alert(1)}
            variant="secondary"
            className="ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
