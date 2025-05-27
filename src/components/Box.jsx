import React from "react";

export default function Box({ as: Tag = "div", children, ...props }) {
  // Base styling of every box
  let baseClasses = "w-full p-2 md-rounded shadow ";

  switch (Tag) {
    case "main":
      baseClasses = "box-border h-screen ";
      break;

    case "header":
      baseClasses = "box-border ";
      break;

    case "section":
      baseClasses += "flex-row";
      break;
  }

  const className = baseClasses + (props.className ? `${props.className}` : "");

  return (
    <Tag {...props} className={className}>
      {children}
    </Tag>
  );
}
