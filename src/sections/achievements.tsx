import { Enumeration } from "../components/enumeration";
import { achievements } from "../data";
import { Section, SectionTitle } from "../components/section";

export const AchievementsSection = () => {
  return (
    <Enumeration section="Achievements" data={achievements} />
  );
};
