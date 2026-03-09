import { Image, Link, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { Section, SectionTitle } from "../components/section";
import { Tag } from "../components/tag";
import { images, projects } from "../data";
import { tw } from "../tailwind";
import { ProjectEntryProps } from "../types";

const ProjectEntry: FC<ProjectEntryProps> = (props) => {
  return (
    <View style={tw("flex flex-col gap-1")}>
      <View style={tw("flex flex-col gap-0.5")}>
        <View style={tw("flex flex-row items-center gap-2")}>
          <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 12 }}>{props.name}</Text>
          {props.url && (
            <Link src={props.url} style={{ fontSize: 9, color: "#888888" }}>{props.url}</Link>
          )}
        </View>
        {props.repositry === "private" && (
          <View style={tw("flex flex-row items-center gap-1")}>
            <Image src={images.github_icon} style={tw("h-3 w-3")} />
            <Text style={{ fontSize: 9, color: "#888888", fontFamily: "Helvetica-Oblique" }}>private</Text>
          </View>
        )}
        {props.repositry !== "none" && props.repositry !== "private" && (
          <View style={tw("flex flex-row items-center gap-1")}>
            <Image src={images.github_icon} style={tw("h-3 w-3")} />
            <Link src={props.repositry} style={{ fontSize: 9, color: "#888888" }}>{props.repositry}</Link>
          </View>
        )}
      </View>
      <View style={tw("flex flex-row flex-wrap gap-1")}>
        {props.technologies.map(tech => (
          <Tag label={tech} />
        ))}
      </View>
      <View style={tw("flex flex-col")}>
        {props.description.map(entry => (
          <Text style={tw("text-sm")}>• {entry}</Text>
        ))}
      </View>
    </View>
  );
};

export const ProjectsSection = () => {
  return (
    <Section>
      <SectionTitle title="Projects" />
      <View style={tw("flex flex-col gap-4")}>
        {projects.map(entry => (
          <ProjectEntry {...entry} />
        ))}
      </View>
    </Section>
  );
};
