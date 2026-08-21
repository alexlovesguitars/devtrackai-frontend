'use client';
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./globals.css";


export default function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['DevTrackAI'],
      typeSpeed: 60,
      });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center font-sans bg-[--background] text-[--foreground] mx-5 my-5 md:m-auto">
      <div className="animate-fade-in" style={{ animationDelay: '0ms' }}>
        <Logo />
      </div>

      <Heading
        as="h1"
        className="animate-fade-in tracking-tight m-auto text-2xl font-boldest my-4"
        style={{ animationDelay: '100ms' }}
      >
        <span className="sr-only">DevTrackAI</span>
        <span aria-hidden="true" ref={el} />
      </Heading>

      <p
        className="animate-fade-in text-sm text-muted-foreground max-w-100 text-center leading-6 mb-4"
        style={{ animationDelay: '200ms' }}
      >
        Transform your GitHub projects into professional resumes.
        Select your best work and generate a CV that showcases your tech stack and achievements.
      </p>

      <div className="animate-fade-in w-full" style={{ animationDelay: '300ms' }}>
        <Card
          title="What you get:"
          items={[
            "Select specific projects to highlight",
            "Automatic tech stack extraction",
            "README descriptions included",
            "Export as PDF or Markdown"
          ]}
        />
      </div>

      <div className="animate-fade-in w-full" style={{ animationDelay: '400ms' }}>
        <Button>
          Connect with GitHub
        </Button>
      </div>

      <div
        className="animate-fade-in text-xs text-muted-foreground max-w-100 text-center leading-6 m-4"
        style={{ animationDelay: '500ms' }}
      >
        We only request read access to your public repositories.
      </div>
    </div>
  );
}
