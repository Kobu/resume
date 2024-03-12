import { View , Text} from "@react-pdf/renderer";
import { FC, PropsWithChildren } from "react";
import { tw } from "../tailwind";

export const Section: FC<PropsWithChildren> = (props) => {
  return (
    <View style={tw("border rounded-md p-5 flex flex-col gap-2")}>{props.children}</View>
  );
};

export const SectionTitle = (props: { title: string }) => {
  return (
    <View style={tw("flex flex-row")}>
      <Text style={tw("text-white-400 bg-black uppercase p-1 px-2 text-sm")}>{props.title}</Text>
    </View>
  );
};
