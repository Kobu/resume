import { Link, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Section, SectionTitle } from "../components/section";
import { projects } from "../data";
import { tw } from "../tailwind";
import { ProjectEntryProps } from "../types";

const ProjectEntry: FC<ProjectEntryProps> = (props) => {
  return (
    <View style={tw("flex flex-col")}>
      <Link src={props.repositry} style={{ fontFamily: "Helvetica-Bold", fontSize: 10, color: "black" }}>{props.name}</Link>
      {props.description.map(entry => (
        <Text style={tw("text-sm")}>- {entry}</Text>
      ))}
    </View>
  );
};

export const ProjectsSection = () => {
  return (
    <Section>
      <SectionTitle title="Projects" />
      <View style={tw("flex flex-col gap-4 ")}>
        {projects.map(entry => (
          <ProjectEntry {...entry} />
        ))}
      </View>
    </Section>
  );
};
