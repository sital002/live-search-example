import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function Input(props: InputProps) {
  return <input {...props} className="border  px-2" />;
}
