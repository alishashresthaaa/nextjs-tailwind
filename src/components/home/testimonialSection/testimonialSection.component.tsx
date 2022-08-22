import React from "react";
import { TestimonialList, testimonialList } from "./testimonial.data";
import Image from "next/future/image";
const TestimonialComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
            Reviews
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
            What our client says
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-stone-100 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fugiat, illum quaerat fugit sit obcaecati nobis sapiente, natus
          </p>
        </div>

        <div className="grid md:grid-cols-2 mt-10 gap-9">
          {testimonialList.map((item: TestimonialList, index: number) => {
            return (
              <figure
                className="flex flex-col justify-center items-center p-8 text-center rounded-lg border border-gray-200 dark:border-gray-700 shadow-slate-300 "
                key={index}
              >
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="my-4 font-light dark:text-gray-400">
                    {item.review}
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <Image src={item.image} className="w-10 rounded-[50%]" />
                  <div className="text-left">
                    <div className="font-medium dark:text-white">
                      {item.name}
                    </div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {item.status}
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
