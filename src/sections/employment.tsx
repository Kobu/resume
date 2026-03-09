import { Text, View, Image } from "@react-pdf/renderer";
import { FC } from "react";
import { employments } from "../data";
import { SectionTitle } from "../components/section";
import { TimeInterval } from "../components/time-interval";
import { tw } from "../tailwind";
import { EmploymentEntryProps } from "../types";

const EmploymentEntry: FC<EmploymentEntryProps> = (props) => {
  return (
    <View style={tw("flex flex-row gap-4 items-center")}>
      <Image src={props.icon} style={tw("h-16 w-16 rounded-md")} />
      <View style={tw("flex flex-col flex-1")}>
        <View style={tw("flex flex-row items-center gap-2")}>
          <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 13 }}>
            {props.institute}
          </Text>
          <Text style={{ color: "#888888", fontSize: 10 }}>|</Text>
          <Text style={{ fontFamily: "Helvetica-Oblique", fontSize: 10 }}>
            {props.position}
          </Text>
          <Text style={{ color: "#888888", fontSize: 10 }}>|</Text>
          <Text style={{ fontSize: 10, color: "#888888" }}>{props.team}</Text>
        </View>
        <TimeInterval from={props.from} to={props.to} />
        <View style={tw("flex flex-row flex-wrap gap-1 my-1")}>
          {props.technologies.map((tech) => (
            <Text
              style={tw("bg-black text-white uppercase px-1 py-0.5 text-xs")}
            >
              {tech}
            </Text>
          ))}
        </View>
        <View style={tw("flex flex-col")}>
          {props.description.map((entry) => (
            <Text style={tw("text-sm")}>• {entry}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export const EmploymentSection = () => {
  return (
    <View
      style={tw(
        "w-full border-l-4 border-yellow-500 pl-4 py-2 flex flex-col gap-4",
      )}
    >
      <SectionTitle title="Employment" />
      <View style={tw("flex flex-col gap-4")}>
        {employments.map((entry) => (
          <EmploymentEntry {...entry} />
        ))}
      </View>
    </View>
  );
};
