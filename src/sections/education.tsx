import { Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Section, SectionTitle } from "../components/section";
import { TimeInterval } from "../components/time-interval";
import { tw } from "../tailwind";
import { EducationEntryProps } from "../types";
import { education } from "../data";

export const EducationEntry: FC<EducationEntryProps> = (props) => {
  return (
    <View style={tw("flex flex-col")}>
      <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{props.insititute}</Text>
      <Text style={tw("px-2 text-xs")}>{props.address}</Text>
      <TimeInterval from={props.from} to={props.to} />
    </View>
  );
};

export const EducationSection = () => {
  return (
    <Section>
      <SectionTitle title="Education" />
      <View style={tw("flex flex-col gap-4 ")}>
        {education.map(entry => (<EducationEntry {...entry} />))}
      </View>
    </Section>
  );
};
