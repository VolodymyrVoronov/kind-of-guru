import timeLineBoxes from "./timeLineBoxes";

import styles from "./TimeLine.module.css";

const TimeLine = (): JSX.Element => {
  return (
    <div className={styles.timeline}>
      {timeLineBoxes.map(({ id, time }) => {
        return (
          <span key={id} className={styles.timeline__box}>
            {time}
          </span>
        );
      })}
    </div>
  );
};

export default TimeLine;
