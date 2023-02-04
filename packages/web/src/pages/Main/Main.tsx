import { useLayoutEffect, useState } from "react";
import { Button, Container, Grid } from "@nextui-org/react";
import { IoPersonAddSharp } from "react-icons/io5";

import IUser from "../../types/User";
import IProject from "../../types/Project";

import getDateString from "../../helpers/getDateString";

import Calendar from "../../components/Calendar/Calendar";
import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import TimeLine from "../../components/TimeLine/TimeLine";
import UsersList from "../../components/UsersList/UsersList";
import TimetableGrid from "../../components/TimetableGrid/TimetableGrid";

import styles from "./Main.module.css";

const Main = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [date, setDate] = useState(getDateString());

  const onAddUserButtonClick = (): void => {
    console.log("add user");
  };

  const onDateClick = (d: string): void => {
    setDate(d);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__calendar}>
        <Calendar onDateClick={onDateClick} />
      </div>
      <ContainerHeightWrapper
        className={styles.main__timetable}
        style={{
          height: `${window.innerHeight - 76}px`,
        }}
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

        <Grid.Container
          css={{
            d: "flex",
            fd: "column",
            height: `${window.innerHeight - 108}px`,
            background:
              "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
          }}
        >
          <Grid.Container
            css={{
              d: "flex",
              borderBottom: "1px solid white",
            }}
          >
            <Grid
              css={{
                d: "flex",
                w: 144,
              }}
            >
              <UsersList />
            </Grid>
            <Grid
              css={{
                d: "flex",
                flexGrow: 1,
              }}
            >
              <TimetableGrid />
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </ContainerHeightWrapper>
    </div>
  );
};

export default Main;
