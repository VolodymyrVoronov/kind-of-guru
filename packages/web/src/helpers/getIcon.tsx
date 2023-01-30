import React, { ReactElement } from "react";
import {
  TbTriangleInverted,
  TbCircle,
  TbTriangle,
  TbInfoSquare,
} from "react-icons/tb";

const getIcon = (priority: string): ReactElement | undefined => {
  let icon;

  if (priority === "low") {
    icon = (
      <span style={{ display: "flex", color: "#0072F5" }}>
        <TbTriangleInverted />
      </span>
    );
  }

  if (priority === "medium") {
    icon = (
      <span style={{ display: "flex", color: "#13A452" }}>
        <TbCircle />
      </span>
    );
  }

  if (priority === "high") {
    icon = (
      <span style={{ display: "flex", color: "#d6901e" }}>
        <TbTriangle />
      </span>
    );
  }

  if (priority === "severe") {
    icon = (
      <span style={{ display: "flex", color: "#B80A47" }}>
        <TbInfoSquare />
      </span>
    );
  }

  return <div style={{ marginLeft: 5 }}>{icon}</div>;
};

export default getIcon;
