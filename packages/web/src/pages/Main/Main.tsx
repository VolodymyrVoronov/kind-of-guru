import { useEffect, useMemo } from "react";
import {
  Button,
  Grid,
  Modal,
  useModal,
  Text,
  Container,
  Loading,
  Badge,
  Progress,
} from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import superjson from "superjson";
import { IoPersonAddSharp } from "react-icons/io5";

import useAppStore, { IUserTimetable } from "../../store/app.store";

import trpc from "../../hooks/trpc";

import Calendar from "../../components/Calendar/Calendar";
import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import TimeLine from "../../components/TimeLine/TimeLine";
import TimetableUserBlock from "../../components/TimetableUserBlock/TimetableUserBlock";
import AddUserInfoBlock from "../../components/AddUserInfoBlock/AddUserInfoBlock";
import UserCardMini from "../../components/UserCardMini/UserCardMini";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

import styles from "./Main.module.css";

const Main = (): JSX.Element => {
  const {
    setUsers,
    setTimetableUsers,
    setTimetableDate,
    clearTimetableUser,
    users,
    timetableUsers,
    timetableDate,
  } = useAppStore();

  const { setVisible, bindings } = useModal();

  const {
    refetch: refetchDataUsers,
    data: dataUsers,
    isLoading: isLoadingFetchUsers,
    isSuccess: isSuccessFetchUsers,
    isError: isErrorFetchUsers,
    error: errorFetchUsers,
  } = trpc.useQuery(["getUsers"], { enabled: false });

  const {
    refetch: refetchDataTimetable,
    data: dataTimetable,
    isLoading: isLoadingFetchTimetable,
    isSuccess: isSuccessFetchTimetable,
    isError: isErrorFetchTimetable,
    error: errorFetchTimetable,
  } = trpc.useQuery(["getTimetable", { timetableDate }], {
    enabled: false,
  });

  const {
    mutate: mutateCreateTimetable,
    isSuccess: isSuccessCreateTimetable,
    isLoading: isLoadingCreateTimetable,
    isError: isErrorCreateTimetable,
    error: errorCreateTimetable,
  } = trpc.useMutation(["createTimetable"]);

  const {
    mutate: mutateUpdateTimetable,
    isLoading: isLoadingUpdateTimetable,
    isSuccess: isSuccessUpdateTimetable,
    isError: isErrorUpdateTimetable,
    error: errorUpdateTimetable,
  } = trpc.useMutation(["updateTimetable"]);

  const onAddUserButtonClick = (): void => {
    setVisible(true);
    refetchDataUsers();
  };

  const onDateClick = useMemo(
    () =>
      (d: string): void => {
        setTimetableDate(d);
      },
    []
  );

  const onUserCardMiniClick = (id: number): void => {
    setTimetableUsers(id);
    setVisible(false);
  };

  useEffect(() => {
    refetchDataUsers();

    if ((isSuccessFetchUsers && dataUsers) || bindings.open) {
      if (dataUsers) setUsers(dataUsers);
    }
  }, [isSuccessFetchUsers, bindings.open]);

  useEffect(() => {
    refetchDataTimetable();

    if (isSuccessFetchTimetable) {
      const dateTimetableDB = dataTimetable?.timetableDate;

      if (timetableDate === dateTimetableDB) {
        if (dataTimetable && dataTimetable?.users !== "") {
          clearTimetableUser();

          const newDataTimetable = {
            id: dataTimetable.id,
            dataTimetable: dataTimetable.timetableDate,
            users: superjson.parse(dataTimetable.users),
          };

          if (Symbol.iterator in Object(newDataTimetable.users)) {
            for (const user of newDataTimetable.users as IUserTimetable[]) {
              setTimetableUsers(user.id, user.projects);
            }
          }
        } else {
          clearTimetableUser();
        }
      }

      if (timetableDate !== dateTimetableDB) {
        const newTimetable = {
          timetableDate,
          users: "",
        };

        mutateCreateTimetable(newTimetable);

        if (isSuccessCreateTimetable) {
          refetchDataTimetable();
        }
      }
    }
  }, [timetableDate, isSuccessFetchTimetable, isSuccessCreateTimetable]);

  useEffect(() => {
    if (dataTimetable) {
      const updatedNewDataTimetable = {
        id: dataTimetable.id,
        timetableDate,
        users: superjson.stringify(timetableUsers),
      };

      console.log(
        JSON.stringify(updatedNewDataTimetable) !==
          JSON.stringify(dataTimetable)
      );

      if (
        JSON.stringify(updatedNewDataTimetable) !==
          JSON.stringify(dataTimetable) &&
        updatedNewDataTimetable.id === dataTimetable.id
      ) {
        console.log("UPDATE");
        mutateUpdateTimetable(updatedNewDataTimetable);
      }
    }
  }, [timetableUsers]);

  useEffect(() => {
    if (isSuccessUpdateTimetable || !isLoadingUpdateTimetable) {
      refetchDataTimetable();
    }
  }, [isSuccessUpdateTimetable]);

  return (
    <div className={styles.main}>
      {isErrorFetchTimetable && (
        <Container
          justify="center"
          css={{
            position: "absolute",
            zIndex: 111,
            bottom: 0,
            right: 0,
            d: "flex",
            justifyContent: "flex-end",
            p: 0,
            m: 0,
          }}
        >
          <Badge
            size="lg"
            color="error"
            css={{
              textAlign: "center",
              borderRadius: 14,
            }}
          >
            Something has gone wrong. <br />
            {errorFetchTimetable?.message}
          </Badge>
        </Container>
      )}

      {isErrorCreateTimetable && (
        <Container
          justify="center"
          css={{
            position: "absolute",
            zIndex: 111,
            bottom: 0,
            right: 0,
            d: "flex",
            justifyContent: "flex-end",
            p: 0,
            m: 0,
          }}
        >
          <Badge
            size="lg"
            color="error"
            css={{
              textAlign: "center",
              borderRadius: 14,
            }}
          >
            Something has gone wrong. <br />
            {errorCreateTimetable?.message}
          </Badge>
        </Container>
      )}

      {isErrorUpdateTimetable && (
        <Container
          justify="center"
          css={{
            position: "absolute",
            zIndex: 111,
            bottom: 0,
            right: 0,
            d: "flex",
            justifyContent: "flex-end",
            p: 0,
            m: 0,
          }}
        >
          <Badge
            size="lg"
            color="error"
            css={{
              textAlign: "center",
              borderRadius: 14,
            }}
          >
            Something has gone wrong. <br />
            {errorUpdateTimetable?.message}
          </Badge>
        </Container>
      )}

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
            {isLoadingFetchUsers ? (
              <Container
                css={{
                  d: "flex",
                  jc: "center",
                }}
              >
                <Loading>Loading...</Loading>
              </Container>
            ) : (
              users.map((user) => {
                return (
                  <UserCardMini
                    key={user.id}
                    user={user}
                    onUserCardMiniClick={onUserCardMiniClick}
                  />
                );
              })
            )}

            {isErrorFetchUsers && (
              <AnimatedWrapper>
                <Container
                  justify="center"
                  css={{
                    d: "flex",
                    p: 0,
                    m: 0,
                  }}
                >
                  <Badge
                    size="lg"
                    color="error"
                    css={{
                      textAlign: "center",
                      borderRadius: 14,
                    }}
                  >
                    Something has gone wrong. <br />
                    {errorFetchUsers?.message}
                  </Badge>
                </Container>
              </AnimatedWrapper>
            )}
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

        {(isLoadingFetchTimetable ||
          isLoadingUpdateTimetable ||
          isLoadingCreateTimetable) && (
          <Progress
            indeterminated
            value={50}
            color="gradient"
            status="secondary"
            css={{
              position: "absolute",
              zIndex: 111,
              bottom: 0,
              left: 0,
              borderRadius: 0,
            }}
          />
        )}

        <Grid.Container
          css={{
            d: "flex",
            fd: "column",
            fw: "nowrap",
            overflow: "auto",
            height: `${window.innerHeight - 108}px`,
            background:
              "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
          }}
        >
          {timetableUsers.length > 0 ? (
            <AnimatePresence mode="sync">
              {timetableUsers.map((u) => {
                return <TimetableUserBlock key={u.id} timetableUser={u} />;
              })}
            </AnimatePresence>
          ) : (
            <AddUserInfoBlock />
          )}
        </Grid.Container>
      </ContainerHeightWrapper>
    </div>
  );
};

export default Main;
