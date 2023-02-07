import { MouseEvent, useEffect } from "react";
import {
  Grid,
  Modal,
  useModal,
  Text,
  Container,
  Loading,
} from "@nextui-org/react";

import useAppStore, { IUserTimetable } from "../../store/app.store";

import trpc from "../../hooks/trpc";

import TimetableUser from "../TimetableUser/TimetableUser";
import TimetableGrid from "../TimetableGrid/TimetableGrid";
import ProjectCardMini from "../ProjectCardMini/ProjectCardMini";

import styles from "./TimetableUserBlock.module.css";

interface ITimetableUserBlockProps {
  timetableUser: IUserTimetable;
}

const TimetableUserBlock = ({
  timetableUser,
}: ITimetableUserBlockProps): JSX.Element => {
  const {
    setProjects,
    updateTimetableUser,
    projects: storeProjects,
    timetableUsers,
  } = useAppStore();

  const { id: userId, projects } = timetableUser;

  const { setVisible, bindings } = useModal();

  const {
    refetch,
    data: dataProjects,
    isLoading: isLoadingFetchProjects,
    isError: isErrorFetchProjects,
    error: errorFetchProjects,
  } = trpc.useQuery(["getProjects"], { enabled: false });

  const onProjectCardMiniClick = (projectId: number): void => {
    setVisible(false);
    updateTimetableUser(userId, projectId);
  };

  const onDeleteClick = (id: number): void => {};

  const onGridLayoutClick = (e: MouseEvent<unknown>): void => {
    setVisible(true);
    refetch();
  };

  useEffect(() => {
    if (!isLoadingFetchProjects && dataProjects && bindings.open) {
      setProjects(dataProjects);
    }
  }, [isLoadingFetchProjects]);

  console.log("projects", projects);

  return (
    <div>
      <Modal
        scroll
        width="768px"
        closeButton
        aria-labelledby="modal-title"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" h3>
            Choose a project to add to the timetable
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
            {isLoadingFetchProjects ? (
              <Container
                css={{
                  d: "flex",
                  jc: "center",
                }}
              >
                <Loading>Loading...</Loading>
              </Container>
            ) : (
              storeProjects.map((project) => {
                return (
                  <ProjectCardMini
                    key={project.id}
                    project={project}
                    onProjectCardMiniClick={onProjectCardMiniClick}
                  />
                );
              })
            )}
          </Container>
        </Modal.Body>
      </Modal>

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
          <TimetableUser user={timetableUser} onDeleteClick={onDeleteClick} />
        </Grid>

        <Grid
          className={styles.timetableGrid}
          onClick={onGridLayoutClick}
          css={{
            d: "flex",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          <TimetableGrid projects={projects} />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default TimetableUserBlock;
