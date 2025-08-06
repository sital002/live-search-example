import React from "react";

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return <input {...props} className="border  px-2" />;
}
