"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";

const Heading = () => {
  return (
    <div
      className="max-w-3xl space-y-4
  "
    >
      <h1
        className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-bold
        "
      >
        Where the truth is the work. and the work is the truth. Welcome to{" "}
        <span className="underline">Veritas Opus</span>
      </h1>
      <h3
        className="
                text-base
                sm:text-xl
                md:text-2xl
                font-medium
      "
      >
        We are a community of truth seekers, and we are here to help you find
        the truth in your work.
      </h3>
      <Button>
        Enter Veritas Opus
        <ArrowRightCircle className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Heading;
