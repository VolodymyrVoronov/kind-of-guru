import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

interface IContainerHeightWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heightToSubtract?: number;
  children: ReactNode;
}

const ContainerHeightWrapper = ({
  className,
  heightToSubtract = 76,
  children,
  ...props
}: IContainerHeightWrapperProps): JSX.Element => {
  return (
    <div
      style={{
        height: `${window.innerHeight - heightToSubtract}px`,
        overflow: "auto",
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContainerHeightWrapper;
