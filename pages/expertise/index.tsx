import axios from "axios";
import DisplayOne from "src/components/displayone/displayone.component";

import { ExpertiseType } from "./types";

const Expertise = ({ expertise }: ExpertiseType) => {
  return (
    <>
      <DisplayOne
        title="Our Expertise"
        description={expertise.description}
        image={expertise.image}
        list={expertise.list}
      />
    </>
  );
};

export default Expertise;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/expertise");
  return {
    props: {
      expertise: res.data,
    },
  };
};
