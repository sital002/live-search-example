"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { searchProduct } from "@/actions/products";
import { useQuery } from "@tanstack/react-query";

export function HomeClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products", debouncedSearchTerm],
    queryFn: () => searchProduct(debouncedSearchTerm),
  });
  return (
    <div>
      <label>Search: </label>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <p>Search: {searchTerm.trim()}</p>
      {error ? error.message : null}
      {isLoading ? "Loading..." : null}
      {data &&
        !isLoading &&
        !error &&
        data.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      {data && data.length <= 0 ? "Product not found" : null}
    </div>
  );
}
