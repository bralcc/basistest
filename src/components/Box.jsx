import React from "react";

export default function Box({ as: Tag = "div", children, ...props }) {
  // Base styling of every box
  let baseClasses = "box-border w-full p-3 bg-white rounded shadow ";

  // If the box is a specific type, apply conditional styling
  if (Tag === "main" || Tag === "header") {
    baseClasses = "box-border w-full";
  } else if (Tag === "section") {
    baseClasses += "flex-row w-full gap-4";
  }

  const className = baseClasses + (props.className ? `${props.className}` : "");

  return (
    <Tag {...props} className={className}>
      {children}
    </Tag>
  );
}
