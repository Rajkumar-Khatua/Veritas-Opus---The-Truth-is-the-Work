"use client";

import { useEffect, useState } from "react";
import { SettingsModel } from "../models/settings-model";

export const ModelProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SettingsModel />
    </>
  );
};
