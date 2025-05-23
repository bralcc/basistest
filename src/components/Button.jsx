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
    "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-200 ease-in-out",
  ];

  switch (variant) {
    case "contained":
      classes.push("bg-primary text-text hover:text-accent");
      break;
    case "outlined":
      classes.push(
        "bg-transparent text-text outline outline-primary hover:bg-accent hover:outline-hidden"
      );
      break;
    default:
      classes.push("bg-gray-200 text-gray-800 hover:bg-gray-300");
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
