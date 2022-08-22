import Heading from "../heading/heading.component";
import Card from "./card.component";
import { CardListTypes, CardTypes } from "./card.types";

const CardList = (props: CardListTypes) => {
  const { heading, description, image, list } = props;
  return (
    <div className="max-w-6xl mx-auto px-6 py-4 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
      <Heading title={heading} description={description} image={image} />
      <dl className="mt-2 flex flex-row flex-wrap gap-6 items-start justify-evenly md:justify-start sm:justify-start">
        {list?.map((item: CardTypes) => {
          return (
            <div className="w-full mt-3 sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[32%]">
              <Card
                id={item.id}
                image={item.image}
                title={item.title}
                details={item.details}
                link={`/services/${item.id}`}
              />
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default CardList;
