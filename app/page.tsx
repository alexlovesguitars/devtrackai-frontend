import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Card } from "./components/Card";
import { Button } from "./components/Button";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[--background] text-[--foreground] m-auto">
      <Logo />
      <Heading as="h1" className="tracking-tight m-auto text-2xl font-boldest my-4">
        DevTrackAI
      </Heading>
      <p className="text-sm text-muted-foreground max-w-100 text-center leading-6 mb-4">
        Transform your GitHub projects into professional resumes.
        Select your best work and generate a CV that showcases your tech stack and achievements.
      </p>
      <Card
        title="What you get:"
        items={[
          "Select specific projects to highlight",
          "Automatic tech stack extraction",
          "README descriptions included",
          "Export as PDF or Markdown"
        ]}
      />
      <Button>
        Connect with GitHub
      </Button>
    </div>
  );
}
