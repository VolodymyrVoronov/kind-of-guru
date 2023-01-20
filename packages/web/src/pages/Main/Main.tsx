import React, { MutableRefObject, useRef } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Calendar from "../../components/Calendar/Calendar";

import styles from "./Main.module.css";

const Main = (): JSX.Element => {
  const containerHeight = window.innerHeight - 76;

  return (
    <div className={styles.main}>
      <div className={styles.main__nav}>
        <NavBar />
      </div>
      <div className={styles.main__body}>
        <div className={styles.main__calendar}>
          <Calendar />
        </div>
        <div
          className={styles.main__timetable}
          style={{ height: `${containerHeight}px` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          impedit, possimus placeat culpa perferendis minus incidunt molestiae
          perspiciatis aspernatur libero officiis fugiat, maxime quam. Numquam
          sequi enim dolorum cum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium impedit, possimus placeat culpa
          perferendis minus incidunt molestiae perspiciatis aspernatur libero
          officiis fugiat, maxime quam. Numquam sequi enim dolorum cum sunt!
        </div>
      </div>
    </div>
  );
};

export default Main;
