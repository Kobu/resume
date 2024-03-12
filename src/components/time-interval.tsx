import { Text } from "@react-pdf/renderer";
import { format } from "date-fns";
import { tw } from "../tailwind";

export const TimeInterval = (props: { from: Date, to: Date }) => {
  const fromPart = format(props.from, "LLLL u");
  const toPart = format(props.to, "LLLL u");

  return (
    <Text style={tw("tracking-wider uppercase p-1 px-2 text-xs text-gray-400")}>{fromPart} - {toPart}</Text>
  );
};
