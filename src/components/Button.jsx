import React from "react";

export default function Button({
  variant = "contained",
  children,
  onClick,
  disabled,
  className = "",
  ...props
}) {
  const classes = [
    "px-5 py-2.5 ring-inset text-text font-medium rounded-md transition duration-300 ease-in-out",
  ];

  switch (variant) {
    case "outlined":
      classes.push(
        "bg-white ring-3 hover:bg-black hover:ring-0 hover:text-white hover:outline-none"
      );
      break;
    case "contained":
      classes.push(
        "bg-black text-white hover:bg-white hover:text-text hover:ring-3"
      );
      break;
  }

  if (className) classes.push(className);

  // Only sanitize if you really need to
  const sanitizedChildren = React.Children.map(children, (child) =>
    typeof child === "string" ? child.replace(/[^a-zA-Z0-9 ]/g, "") : child
  );

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {sanitizedChildren}
    </button>
  );
}
