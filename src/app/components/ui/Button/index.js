"use client";

import { cn } from "@/app/utils";

const Button = ({
  children,
  type = "button",
  variant = "default",
  onClick = () => {},
}) => {
  const buttonDefault = variant === "default";
  const buttonDanger = variant === "danger";

  const rootClassnames = cn(
    "font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 ",
    {
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":
        buttonDefault,
      "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900":
        buttonDanger,
    }
  );

  return (
    <button type={type} className={rootClassnames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
