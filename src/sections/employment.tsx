import { Text, View, Image } from "@react-pdf/renderer";
import { FC } from "react";
import { employments } from "../data";
import { Section, SectionTitle } from "../components/section";
import { TimeInterval } from "../components/time-interval";
import { tw } from "../tailwind";
import { EmploymentEntryProps } from "../types";

const EmploymentEntry: FC<EmploymentEntryProps> = (props) => {
  return (
    <View style={tw("flex flex-col")}>
      <View style={tw("flex flex-row gap-1 items-center")}>
        <Image src={props.icon} style={tw("h-6 w-6")} />
        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{props.institute}</Text>
      </View>
      <TimeInterval from={props.from} to={props.to} />
      <View style={tw("flex flex-col")}>
        {props.description.map(entry => (
          <Text style={tw("text-sm")}>- {entry}</Text>
        ))}
      </View>
    </View>
  );
};
export const EmploymentSection = () => {
  return (
    <Section>
      <SectionTitle title="Employment" />
      <View style={tw("flex flex-col gap-4")}>
        {employments.map(entry => (
          <EmploymentEntry {...entry} />
        ))}
      </View>
    </Section>
  );
};
