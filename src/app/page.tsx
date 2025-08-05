import { HomeClient } from "@/components/home-client";
import React from "react";

export default function page() {
  return (
    <div className="px-4">
      <p>Home</p>
      <div>
        <HomeClient />
      </div>
    </div>
  );
}
