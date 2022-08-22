import { SubListType } from "src/types/list";
import Heading from "../heading/heading.component";
import { DisplayTwoTypes } from "./displaytwo.types";

const DisplayTwo = (props: DisplayTwoTypes) => {
  const { title, description, image, list } = props;
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
      <Heading title={title} description={description} image={image} />
      <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-col-3 lg:gap-x-28">
        {list.map((item: SubListType) => {
          return (
            <li className="flex" key={item.id}>
              <div className="px-4 text-5xl font-extralight text-gray-600 dark:text-gray-200">
                {item.icon ? (
                  <img
                    src={item.icon}
                    className="w-[25px] h-[25px]  mr-3  dark:brightness-0 dark:invert"
                  />
                ) : (
                  <span>{item.id}.</span>
                )}
              </div>
              <div>
                <div className="text-xl font-bold text-gray-600 dark:text-gray-200">
                  {item.title}
                </div>
                <p className="py-2 text-sm text-gray-500 dark:text-gray-100">
                  {item.details}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTwo;
