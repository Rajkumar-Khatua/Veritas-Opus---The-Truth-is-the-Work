"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  const supportEmail = "rajkhatua2020@gmail.com";
  const supportSubject = "Issue with Veritas Opus";

  const generateSupportMailtoLink = () => {
    const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(
      supportSubject,
    )}`;
    return mailtoLink;
  };

  return (
    <div className="h-full flex flex-col gap-3 items-center justify-center">
      <Image
        src="/error.png"
        height={300}
        width={300}
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height={300}
        width={300}
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Something went wrong. Please try again later.
      </h2>
      <h3 className="text-sm font-medium">
        If the problem persists, please contact support at{" "}
        <Link href={generateSupportMailtoLink()}>
          <span className="font-bold underline">Support</span>
        </Link>
      </h3>
      <Button>
        <Link href="/documents">Go back to documents</Link>
      </Button>
    </div>
  );
};

export default Error;
