import { Enumeration } from "../components/enumeration";
import { hobbies } from "../data";
import { Section, SectionTitle } from "../components/section";

export const HobbiesSection = () => {
  return (
    <Enumeration section="Hobbies" data={hobbies} />
  );
};
