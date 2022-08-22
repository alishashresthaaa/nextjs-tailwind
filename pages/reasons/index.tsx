import axios from "axios";
import DisplayOne from "src/components/displayone/displayone.component";
import { ReasonsTypes } from "./types";

const Reasons = ({ reasons }: ReasonsTypes) => {
  return (
    <>
      <DisplayOne
        title="Why Hire Us"
        description={reasons.description}
        image={reasons.image}
        list={reasons.list}
      />
    </>
  );
};

export default Reasons;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/reasons");
  return {
    props: {
      reasons: res.data,
    },
  };
};
