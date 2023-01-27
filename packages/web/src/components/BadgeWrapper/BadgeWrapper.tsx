import { Badge } from "@nextui-org/react";

interface IBadgeWrapperProps {
  text?: string;
  textMessage: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | undefined;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
}

const BadgeWrapper = ({
  text,
  textMessage,
  color,
  size,
}: IBadgeWrapperProps): JSX.Element => {
  return (
    <Badge
      size={size}
      color={color}
      css={{
        mt: -2,
        ml: -2,
        textAlign: "center",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 14,
      }}
    >
      {text} {text && <br />}
      {textMessage}
    </Badge>
  );
};

export default BadgeWrapper;
