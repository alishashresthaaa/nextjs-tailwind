import { HeadingTypes } from "./heading.types";

const Heading = (props: HeadingTypes) => {
  const { title, image, description } = props;
  return (
    <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-gray-500 dark:text-stone-100">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="hidden w-80 max-w-xl rounded-lg justify-self-end lg:block"
      />
    </div>
  );
};

export default Heading;
