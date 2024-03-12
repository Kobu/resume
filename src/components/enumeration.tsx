import { View, Text } from "@react-pdf/renderer";
import { tw } from "../tailwind";
import { Section, SectionTitle } from "./section";

export const Enumeration = (props: { section: string, data: { title: string, description: string[] }[] }) => {
  return (
    <Section>
      <SectionTitle title={props.section} />
      {props.data.map(entry => (
        <>
          <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{entry.title}</Text>
          <View>
            {entry.description.map(desc => (
              <Text style={tw("text-xs")}>{desc}</Text>
            ))}
          </View>
        </>
      ))}

    </Section>
  );
};
