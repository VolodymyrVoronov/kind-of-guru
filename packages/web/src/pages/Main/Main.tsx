import { Button } from "@nextui-org/react";
import { IoPersonAddSharp } from "react-icons/io5";

import Calendar from "../../components/Calendar/Calendar";
import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import TimeLine from "../../components/TimeLine/TimeLine";

import styles from "./Main.module.css";

const Main = (): JSX.Element => {
  const onAddUserButtonClick = (): void => {
    console.log("add user");
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__calendar}>
        <Calendar />
      </div>
      <ContainerHeightWrapper
        className={styles.main__timetable}
        style={{ height: `${window.innerHeight - 76}px` }}
      >
        <div className={styles.main__timeline}>
          <Button
            onPress={onAddUserButtonClick}
            className={styles["main__timeline-button"]}
            size="sm"
            icon={<IoPersonAddSharp />}
            aria-label="Add user to timetable"
          />
          <TimeLine />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        impedit, possimus placeat culpa perferendis minus incidunt molestiae
        perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
        sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium impedit, possimus placeat culpa
        perferendis minus incidunt molestiae perspiciatis aspernatur libero
        officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit,
        possimus placeat culpa perferendis minus incidunt molestiae perspiciatis
        aspernatur libero officiis fugiat, maxime quam. Numquam sequi enim
        dolorum cum sunt! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium impedit, possimus placeat culpa perferendis minus
        incidunt molestiae perspiciatis aspernatur libero officiis fugiat,
        maxime quam. Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Praesentium impedit, possimus placeat
        culpa perferendis minus incidunt molestiae perspiciatis aspernatur
        libero officiis fugiat, maxime quam. Numquam sequi enim dolorum cum
        sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium impedit, possimus placeat culpa perferendis minus incidunt
        molestiae perspiciatis aspernatur libero officiis fugiat, maxime quam.
        Numquam sequi enim dolorum cum sunt!
      </ContainerHeightWrapper>
    </div>
  );
};

export default Main;
