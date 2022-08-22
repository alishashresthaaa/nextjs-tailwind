import Link from "next/link";
import { CardTypes } from "./card.types";

const Card = (props: CardTypes) => {
  const { id, image, title, details, link } = props;
  return (
    <Link href={link || ""} passHref key={id}>
      <div className="rounded-lg border border-gray-200 shadow-slate-300 dark:border-gray-700 cursor-pointer transition ease-in duration-700 hover:-translate-y-3 hover:bg-slate-50 dark:hover:bg-slate-700 ">
        <img
          className="rounded-t-lg w-80 max-w-xl m-auto h-auto"
          src={image}
          alt={link}
        />

        <div className="p-5 border-t border-gray-200 dark:border-gray-500">
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white sm:tracking-tight sm:text-lg">
            {title}
          </h5>

          <p className="my-4 font-normal text-gray-500 dark:text-stone-100">
            {details.substring(0, 200)}{" "}
            <Link href={link || ""}>
              <a className="text-sky-400">Read More. . . .</a>
            </Link>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
