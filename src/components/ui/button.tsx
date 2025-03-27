import * as React from "react";

const Button = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`px-4 py-2 font-semibold rounded-md shadow-md ${className}`} {...props} />
);

export { Button };
