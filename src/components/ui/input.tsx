import * as React from "react";

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    {...props}
  />
);

export { Input };
