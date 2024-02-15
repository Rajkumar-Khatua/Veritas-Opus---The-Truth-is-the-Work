"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useOrigin } from "@/hooks/use-origin";
import { useMutation } from "convex/react";
import { CheckCheck, CopyCheck, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PublishProps {
  initialData: Doc<"documents">;
}
export const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublished = () => {
    const promise = update({
      id: initialData._id,
      isPublished: true,
    }).finally(() => {
      setPublishing(false);

      toast.promise(promise, {
        loading: "Your note is one step away from being live",
        success: "Congratulations! Your document is now live",
        error: "Oops! Failed to publish",
      });
    });
  };

  const onUnpublished = () => {
    const promise = update({
      id: initialData._id,
      isPublished: false,
    }).finally(() => {
      setPublishing(false);

      toast.promise(promise, {
        loading: "Your note is get unpublishing...",
        success: "Your document is now unpublished",
        error: "Oops! Failed to unpublish",
      });
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          Publish
          {initialData.isPublished && <Globe className="h-4 w-4 ml-2" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {initialData.isPublished ? (
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Globe className="h-8 w-8 text-sky-500 animate-pulse mb-2" />
              <p className="text-xs font-medium text-sky-600">
                Your document is live at this URL and can be shared with anyone
                by copying the link.
              </p>
            </div>
            <div className="flex items-center">
              <input
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none"
                size="sm"
              >
                {copied ? (
                  <CheckCheck className="h-4 w-4" />
                ) : (
                  <CopyCheck className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button
              size="sm"
              className="w-full text-xs "
              disabled={publishing}
              onClick={onUnpublished}
            >
              Unpublish
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Globe className="h-8 w-8 text-muted-foreground mb-2" />{" "}
            <p className="text-sm text-sky-500 font-medium mb-2">Publish</p>
            <span className="text-xs text-muted-foreground mb-4">
              Share your document with the world by publishing it. Once
              published, you can share the link with anyone.
            </span>
            <Button
              onClick={onPublished}
              disabled={publishing}
              className="w-full text-xs"
              size="sm"
            >
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
