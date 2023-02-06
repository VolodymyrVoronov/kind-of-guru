import { useEffect, useState, useLayoutEffect, useRef, useMemo } from "react";
import {
  Button,
  Grid,
  Modal,
  useModal,
  Text,
  Container,
} from "@nextui-org/react";
import { IoPersonAddSharp } from "react-icons/io5";

import useAppStore from "../../store/app.store";

import trpc from "../../hooks/trpc";

import IUser from "../../types/User";

import getDateString from "../../helpers/getDateString";

import Calendar from "../../components/Calendar/Calendar";
import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import TimeLine from "../../components/TimeLine/TimeLine";
import TimetableUserBlock from "../../components/TimetableUserBlock/TimetableUserBlock";
import AddUserInfoBlock from "../../components/AddUserInfoBlock/AddUserInfoBlock";
import UserCardMini from "../../components/UserCardMini/UserCardMini";

import styles from "./Main.module.css";

interface IUserData extends IUser {
  id: number;
}

const Main = (): JSX.Element => {
  const {
    setUsers,
    setTimetableUsers,
    setTimetableDate,
    users,
    timetableUsers,
    timetableDate,
  } = useAppStore();

  const { setVisible, bindings } = useModal();

  const utils = trpc.useContext();

  // const [timetableUsers, setTimetableUsers] = useState<IUser[]>([]);
  // const [timetableDate, setTimetableDate] = useState(getDateString());

  const {
    data: dataUsers,
    isLoading: isLoadingFetchUsers,
    isError: isErrorFetchUsers,
    error: errorFetchUsers,
  } = trpc.useQuery(["getUsers"]);

  const {
    data: dataTimetable,
    isLoading: isLoadingFetchTimetable,
    isSuccess: isSuccessFetchTimetable,
    isError: isErrorFetchTimetable,
    error: errorFetchTimetable,
  } = trpc.useQuery(["getTimetable", { timetableDate }]);

  const {
    mutate,
    isLoading: isLoadingCreateTimetable,
    isSuccess: isSuccessCreateTimetable,
    isError: isErrorCreateTimetable,
    error: errorCreateTimetable,
  } = trpc.useMutation(["createTimetable"]);

  const onAddUserButtonClick = (): void => {
    setVisible(true);
  };

  const onDateClick = (d: string): void => {
    setTimetableDate(d);
  };

  const onUserCardMiniClick = (id: number): void => {
    setTimetableUsers(id);
    setVisible(false);
  };

  useEffect(() => {
    if (!isLoadingFetchUsers && dataUsers) {
      setUsers(dataUsers);
    }
  }, [isLoadingFetchUsers]);

  useEffect(() => {
    setTimetableDate(getDateString());
  }, []);

  // useEffect(() => {
  //   const newTimetable = {
  //     timetableDate,
  //     users: JSON.stringify(timetableUsers),
  //   };

  //   mutate(newTimetable);
  // }, [timetableUsers]);

  // useEffect(() => {
  //   if (isSuccessCreateTimetable) {
  //     utils.invalidateQueries();
  //   }
  // }, [isSuccessCreateTimetable]);

  // console.log("users", users);
  console.log("timetableUsers", timetableUsers);
  // console.log("timetableDate", timetableDate);
  // console.log("dataTimetable", dataTimetable);

  return (
    <div className={styles.main}>
      <Modal
        scroll
        width="768px"
        closeButton
        aria-labelledby="modal-title"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" h3>
            Choose a user to add to the timetable
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Container
            css={{
              d: "flex",
              fd: "row",
              fw: "wrap",
              p: 0,
            }}
          >
            {users &&
              users.map((user) => {
                return (
                  <UserCardMini
                    key={user.id}
                    user={user}
                    onUserCardMiniClick={onUserCardMiniClick}
                  />
                );
              })}
          </Container>
        </Modal.Body>
      </Modal>

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
          {timetableUsers.length > 0 ? (
            timetableUsers.map((u) => {
              return <TimetableUserBlock key={u.id} timetableUser={u} />;
            })
          ) : (
            <AddUserInfoBlock />
          )}
        </Grid.Container>
      </ContainerHeightWrapper>
    </div>
  );
};

export default Main;
