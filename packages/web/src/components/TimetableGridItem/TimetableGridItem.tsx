import {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import cn from "classnames";

import styles from "./TimetableGridItem.module.css";

interface ITimetableGridItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const TimetableGridItem = forwardRef(
  (
    { children, className, ...props }: ITimetableGridItemProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(styles["layout-item"], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default TimetableGridItem;
