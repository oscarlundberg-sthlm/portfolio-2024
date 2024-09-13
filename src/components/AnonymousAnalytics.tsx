"use client";

import { useEffect } from "react";

function AnonymousAnalytics() {
  useEffect(() => {
    const ping = async () => {
      const data = {
        referrer: document?.referrer,
      };
      const endpoint = "https://aa.oscar.ooo/api/aa/p";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
      });
    };

    window.addEventListener("load", ping);

    return () => {
      window.removeEventListener("load", ping);
    };
  }, []);
  return <></>;
}

export default AnonymousAnalytics;
