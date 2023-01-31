import { ReactElement } from "react";
import { Tooltip } from "@nextui-org/react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const getPackageTypeIcon = (packageType: string): ReactElement | undefined => {
  return {
    basic: (
      <Tooltip content="Basic package" color="invert">
        <BsStar color="#79a8b1" />
      </Tooltip>
    ),
    standard: (
      <Tooltip content="Standard package" color="invert">
        <BsStarHalf color="#F5A524" />
      </Tooltip>
    ),
    premium: (
      <Tooltip content="Premium package" color="invert">
        <BsStarFill color="#fb6a69" />
      </Tooltip>
    ),
  }[packageType];
};

export default getPackageTypeIcon;
