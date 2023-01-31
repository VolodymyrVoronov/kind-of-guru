import { ReactElement } from "react";
import { Tooltip } from "@nextui-org/react";
import {
  TbTriangleInverted,
  TbCircle,
  TbTriangle,
  TbDiamonds,
} from "react-icons/tb";

const getPriorityIcon = (priority: string): ReactElement | undefined => {
  return {
    low: (
      <Tooltip content="Low priority" color="invert">
        <TbTriangleInverted color="#0072F5" fill="#0072F5" />
      </Tooltip>
    ),
    medium: (
      <Tooltip content="Medium priority" color="invert">
        <TbCircle color="#13A452" fill="#13A452" />
      </Tooltip>
    ),
    high: (
      <Tooltip content="High priority" color="invert">
        <TbTriangle color="#d6901e" fill="#d6901e" />
      </Tooltip>
    ),
    severe: (
      <Tooltip content="Severe priority" color="invert">
        <TbDiamonds color="#B80A47" fill="#B80A47" />
      </Tooltip>
    ),
  }[priority];
};

export default getPriorityIcon;
