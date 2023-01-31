import { ReactElement } from "react";
import {
  TbTriangleInverted,
  TbCircle,
  TbTriangle,
  TbInfoSquare,
} from "react-icons/tb";

const getPriorityIcon = (priority: string): ReactElement | undefined => {
  return {
    low: <TbTriangleInverted color="#0072F5" />,
    medium: <TbCircle color="#13A452" />,
    high: <TbTriangle color="#d6901e" />,
    severe: <TbInfoSquare color="#B80A47" />,
  }[priority];
};

export default getPriorityIcon;
