import axios from "axios";
import DisplayOne from "src/components/displayone/displayone.component";
import { ServiceTypes } from "./types";

const Strengths = ({ strengths }: ServiceTypes) => {
  return (
    <>
      <DisplayOne
        title="Our Strenghts"
        description={strengths.description}
        image={strengths.image}
        list={strengths.list}
      />
    </>
  );
};

export default Strengths;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/strengths");
  return {
    props: {
      strengths: res.data,
    },
  };
};
