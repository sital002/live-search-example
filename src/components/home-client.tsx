"use client";
import React, { useState } from "react";
import { Input } from "./input";

export function HomeClient() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <label>Search: </label>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </div>
  );
}
