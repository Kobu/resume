import { View, Text, Image } from "@react-pdf/renderer";
import { FC } from "react";
import { Section, SectionTitle } from "../components/section";
import { skills } from "../data";
import { tw } from "../tailwind";
import { SkillEntryProps } from "../types";


const MAX_SKILL_RATING = 5;


const SkillEntry: FC<SkillEntryProps> = (props) => {
  return (
    <View>
      <View style={tw("flex flex-row items-center gap-1")}>
        <Image src={props.icon} style={tw("h-5 w-5")} />
        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{props.name}</Text>
      </View>
      <View style={tw("flex flex-row gap-1 w-full m-1")}>
        {Array.from({ length: MAX_SKILL_RATING }, (_, i) => (i + 1)).map(i => (
          <View style={{ ...tw("h-1 " + (props.rating >= i ? "bg-gray-900" : "bg-gray-500")), flexGrow: 1 }}></View>
        ))}
      </View>
      <View style={tw("flex flex-col")}>
        {props.description.map(entry => (
          <Text style={tw("text-sm")}>- {entry}</Text>
        ))}
      </View>
    </View>
  );
};

export const SkillsSection = () => {
  return (
    <Section>
      <SectionTitle title="Skills" />
      <View style={tw("flex flex-col gap-4 ")}>
        {skills.map(entry => (<SkillEntry {...entry} />))}
      </View>
    </Section>
  );
};
