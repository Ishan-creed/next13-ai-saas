"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8ce3eb55-3d7d-4488-8e3b-e918d0272ea7");
  }, []);

  return null;
};
