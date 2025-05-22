import React from "react";

export default function Box({ as: Tag = "div", children, ...props }) {
  // Base styling of every box
  let baseClasses = "box-border w-screen p-4 md-rounded shadow ";

  switch (Tag) {
    case "main":
      baseClasses = "box-border h-screen ";
      break;

    case "header":
      baseClasses = "box-border ";
      break;

    case "section":
      baseClasses += "flex-row gap-4 ";
      break;
  }

  const className = baseClasses + (props.className ? `${props.className}` : "");

  return (
    <Tag {...props} className={className}>
      {children}
    </Tag>
  );
}
