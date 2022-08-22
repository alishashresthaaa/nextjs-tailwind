import axios from "axios";
import CardList from "src/components/card/cardlist.component";
import { DeveloperType } from "./types";

const DevelopersList = ({ developers }: DeveloperType) => {
  return (
    <>
      <CardList
        heading="Our Developers"
        description={developers.description}
        image={developers.image}
        list={developers.list}
      />
    </>
  );
};

export default DevelopersList;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/developers");
  return {
    props: {
      developers: res.data,
    },
  };
};
