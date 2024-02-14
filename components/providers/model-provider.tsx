"use client";

import { useEffect, useState } from "react";
import { SettingsModel } from "../models/settings-model";
import { CoverImageModel } from "../models/cover-image-model";

export const ModelProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SettingsModel />
      <CoverImageModel />
    </>
  );
};
