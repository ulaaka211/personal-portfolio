"use client";

import { useEffect, useState } from "react";
import { CopyIcon } from "../assets/CopyIcon";

export const CopyButton = (text) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(text);

      setCopied(true);
    } catch (error) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button onClick={handleCopy} disabled={copied}>
      <CopyIcon />
    </button>
  );
};
