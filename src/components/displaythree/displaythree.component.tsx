import { DisplayThreeTypes, SubListThreeTypes } from "./displaythree.types";

const DisplayThree = (props: DisplayThreeTypes) => {
  const { subTitle, title, description, list } = props;
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
            {subTitle}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:tracking-tight">
            {title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-stone-100 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {list.map((item: SubListThreeTypes, index: number) => {
              return (
                <div key={index}>
                  <dt>
                    <p className=" text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                  </dt>
                  <dd className="mt-2  text-gray-500 dark:text-stone-400">
                    {item.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default DisplayThree;
