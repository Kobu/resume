import { Text } from "@react-pdf/renderer";
import { tw } from "../tailwind";

export const Tag = ({ label }: { label: string }) => (
  <Text style={tw("bg-yellow-500 text-black uppercase px-1 py-0.5 text-xs")}>
    {label}
  </Text>
);
