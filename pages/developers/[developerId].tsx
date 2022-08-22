import axios from "axios";
import { ListType } from "src/types/list";
import { SingleDeveloperType } from "./types";

const DeveloperItem = ({ developer }: SingleDeveloperType) => {
  return (
    <div>
      <h2>{developer.type}</h2>
      {developer.services.map((item: ListType) => {
        return <h2 key={item.id}>{item.title}</h2>;
      })}
    </div>
  );
};

export default DeveloperItem;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const res = await axios.get(
    `http://localhost:8000/developers/${params.developerId}`
  );
  return {
    props: {
      developer: res.data,
    },
  };
};
