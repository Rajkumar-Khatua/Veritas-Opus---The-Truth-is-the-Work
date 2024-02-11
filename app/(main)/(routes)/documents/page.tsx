"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();
  return (
    <div
      className="
        h-full
        flex
        flex-col
        items-center
        justify-center
        space-y-4
      "
    >
      <Image
        alt="empty state"
        src="/empty.png"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image
        alt="empty state"
        src="/empty-dark.png"
        height="300"
        width="300"
        className="hidden dark:block"
      />
      <h2
        className="
          text-lg
          font-semibold
          text-center
          dark:text-white

        "
      >
        Hey dear welcome to {user?.firstName}&apos;s Veritas Opus
      </h2>
      <Button>
        <PlusCircleIcon className="h-4 w-4 mr-2" />
        Create a new document
      </Button>
    </div>
  );
};

export default DocumentsPage;
