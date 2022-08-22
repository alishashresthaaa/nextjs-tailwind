import DisplayThree from "src/components/displaythree/displaythree.component";
import { aboutData } from "./aboutSection.data";

const AboutSection = () => {
  return (
    <DisplayThree
      subTitle="Transactions"
      title="  A better way to send money"
      description="  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam."
      list={aboutData}
    />
  );
};

export default AboutSection;
