import { ListType } from "src/types/list";
import Heading from "../heading/heading.component";
import { DisplayOneTypes } from "./displayone.types";

const DisplayOne = (props: DisplayOneTypes) => {
  const { title, description, image, list } = props;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
      <Heading title={title} description={description} image={image} />
      <dl className="mt-5 grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:gap-x-28">
        {list?.map((item: ListType) => {
          return (
            <div className="border-t border-gray-200 dark:border-gray-500 py-12 ">
              <dt className="flex text-lg font-medium text-gray-900 dark:text-white pb-2">
                <img
                  src={item.icon}
                  className="w-[25px] h-[25px]  mr-3  dark:brightness-0 dark:invert"
                />
                <span>{item.title}</span>
              </dt>
              <dd className="mt-2 text-sm text-gray-500 dark:text-gray-100">
                {item.details}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default DisplayOne;
