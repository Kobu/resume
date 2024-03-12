
import ReactPDF, { Image, Text, Page, View, Document, PDFViewer, Link } from "@react-pdf/renderer";
import { Enumeration } from "./components/enumeration";
import { Section, SectionTitle } from "./components/section";
import { socialsLinks, images, hobbies } from "./data";
import { AchievementsSection } from "./sections/achievements";
import { EducationSection } from "./sections/education";
import { EmploymentSection } from "./sections/employment";
import { HobbiesSection } from "./sections/hobbies";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";
import { tw } from "./tailwind";


const Socials = () => {
  return (
    <View style={tw("flex flex-col gap-1")}>
      {socialsLinks.map(value => (
        <Link src={value.link} style={tw("flex flex-row gap-2 text-black-200 no-underline")}>
          <Image src={value.image} style={tw("h-[20px] w-[20px]")} />
          <Text>{value.label}</Text>
        </Link>
      ))}
    </View>
  );
};

const Name = () => {
  return (
    <View style={tw("")}>
      <Text style={{ fontSize: 40 }} >Jakub</Text>
      <Text style={{ fontSize: 40 }} >Jakubec</Text>
    </View>
  );
};

const Header = () => {
  return (
    <View style={{ ...tw("flex flex-row bg-yellow-500 items-center h-1/6 p-4 justify-between") }}>
      <Name />
      <Socials />
      <Image src={images.me} style={tw("rounded-md h-full")} />
    </View>
  );
};

const Sidebar = () => {
  return (
    <View style={tw("bg-yellow-400")}>
      <View style={tw("gap-4 m-4")}>
        <AchievementsSection />
        <SkillsSection />
        <HobbiesSection />
      </View>
    </View>
  );
};

const MainContent = () => {
  return (
    <View style={{ ...tw("flex flex-col gap-4 m-4"), flexGrow: 1 }}>
      <EmploymentSection />
      <ProjectsSection />
      <Section>
        <SectionTitle title="Contributions" />
        <View style={tw("flex flex-col text-sm")}>
          <View style={tw("text-sm flex flex-row gap-2 items-center justify-between")}>
            <View style={tw("flex flex-row gap-1 justift-middle")}>
              <Image style={tw("h-5 w-5")} src={images.commit_icon} />
              <Text>2100+ commits</Text>
            </View>
            <View style={tw("flex flex-row gap-1 justift-middle")}>
              <Image style={tw("h-5 w-5")} src={images.pull_request_icon} />
              <Text>90+ pull requests</Text>
            </View>
            <View style={tw("flex flex-row gap-1 justift-middle")}>
              <Image style={tw("h-5 w-5")} src={images.issues_icon} />
              <Text>130+ issues</Text>
            </View>
          </View>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Common contributor to open source projects</Text>
          <Link src="https://github.com/nvim-telescope/telescope.nvim" style={tw("text-black-200")}>- Telescope.nvim</Link>
          <Link src="https://github.com/pypa/pipenv" style={tw("text-black-200")}>- pipenv</Link>
          <Link src="https://github.com/shadcn-ui/ui" style={tw("text-black-200")}>- shadcn-ui</Link>
        </View>
      </Section >
      <EducationSection />
    </View >
  );
};


export const CV = () => (
  <Document >
    <Page wrap={false} size="A4" style={{ ...tw("flex flex-col "), fontFamily: "Helvetica" }}>
      <Header />
      <View style={tw("flex flex-row h-full")}>
        <MainContent />
        <Sidebar />
      </View >
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
