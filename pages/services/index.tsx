import axios from "axios";
import CardList from "src/components/card/cardlist.component";
import { ServiceType } from "./types";

const Services = ({ services }: ServiceType) => {
  console.log(services);
  return (
    <>
      <CardList
        heading="Our Services"
        description={services.description}
        image={services.image}
        list={services.list}
      />
    </>
  );
};

export default Services;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/services");
  return {
    props: {
      services: res.data,
    },
  };
};
