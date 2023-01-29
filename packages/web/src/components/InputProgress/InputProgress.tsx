import { Progress } from "@nextui-org/react";

interface IInputProgressProps {
  value: number;
  limitReached: boolean;
}

const InputProgress = ({
  value,
  limitReached,
}: IInputProgressProps): JSX.Element => {
  return (
    <Progress
      value={value}
      color={limitReached ? "error" : "success"}
      size="xs"
      css={{
        mt: 5,
      }}
    />
  );
};

export default InputProgress;
