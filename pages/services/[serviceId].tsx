import axios from "axios";
import DisplayTwo from "src/components/displaytwo/displaytwo.component";
import { SingleServiceType } from "./types";

const ServiceItem = ({ service }: SingleServiceType) => {
  const { title, image, details, services } = service;
  if (!service.title) {
    return <div>No service found</div>;
  }
  return (
    <>
      <DisplayTwo
        title={title}
        description={details}
        image={image}
        list={services}
      />
    </>
  );
};

export default ServiceItem;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const res = await axios.get(
    `http://localhost:8000/services/${params.serviceId}`
  );
  return {
    props: {
      service: res.data,
    },
  };
};
