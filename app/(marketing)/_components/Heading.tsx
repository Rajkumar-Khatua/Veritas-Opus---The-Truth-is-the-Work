"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button size="sm" asChild>
          <Link href="/documents">
            Enter VeritasOpus
            <ArrowRightCircle className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button size="sm">
            Get VeritasOpus free
            <ArrowRightCircle className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
