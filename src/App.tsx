import {
  Image,
  Text,
  Page,
  View,
  Document,
  PDFViewer,
  Link,
} from "@react-pdf/renderer";
import { socialsLinks, images } from "./data";
import { AchievementsSection } from "./sections/achievements";
import { EducationSection } from "./sections/education";
import { EmploymentSection } from "./sections/employment";
import { HobbiesSection } from "./sections/hobbies";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";
import { tw } from "./tailwind";

export const CV = () => (
  <Document>
    <Page
      wrap={false}
      size="A4"
      style={{ ...tw("flex flex-col"), fontFamily: "Helvetica" }}
    >
      {/* Header */}
      <View
        style={tw(
          "flex flex-row bg-yellow-500 items-center p-3 justify-between",
        )}
      >
        <View style={tw("ml-10")}>
          <Text style={{ fontSize: 28 }}>Jakub</Text>
          <Text style={{ fontSize: 28 }}>Jakubec</Text>
        </View>
        <View style={tw("flex flex-col gap-1")}>
          {socialsLinks.map((value) => (
            <Link
              src={value.link}
              style={tw("flex flex-row gap-2 text-black-200 no-underline")}
            >
              <Image src={value.image} style={tw("h-[20px] w-[20px]")} />
              <Text>{value.label}</Text>
            </Link>
          ))}
        </View>
        <Image src={images.me} style={tw("rounded-md h-16")} />
      </View>

      {/* Employment */}
      <View style={tw("bg-yellow-50 p-4")}>
        <EmploymentSection />
      </View>

      {/* Two-column body */}
      <View style={tw("flex flex-row h-full")}>
        {/* Left column */}
        <View style={tw("flex flex-col gap-4 m-4")}>
          <ProjectsSection />
          <EducationSection />
        </View>

        {/* Right column */}
        <View style={tw("flex flex-col gap-4 m-4")}>
          <AchievementsSection />
          <SkillsSection />
          <HobbiesSection />
        </View>
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <CV />
    </PDFViewer>
  );
}

export default App;
