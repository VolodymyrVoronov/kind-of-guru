import { useEffect } from "react";
import { Layout } from "react-grid-layout";
import {
  Grid,
  Modal,
  useModal,
  Text,
  Container,
  Loading,
} from "@nextui-org/react";
import { motion } from "framer-motion";

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
    deleteTimetableUser,
    addProjectToTimetableUser,
    updatedUserProjectTimetable,
    projects: storeProjects,
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
    addProjectToTimetableUser(userId, projectId);
  };

  const onDeleteClick = (id: number): void => {
    deleteTimetableUser(id);
  };

  const onAddProjectClick = (): void => {
    setVisible(true);
    refetch();
  };

  const onGridChange = (changedLayout: Layout[]): void => {
    updatedUserProjectTimetable(userId, changedLayout);
  };

  useEffect(() => {
    if (!isLoadingFetchProjects && dataProjects && bindings.open) {
      setProjects(dataProjects);
    }
  }, [isLoadingFetchProjects, bindings.open]);

  return (
    <motion.div
      key={userId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          <TimetableUser
            user={timetableUser}
            onDeleteClick={onDeleteClick}
            onAddProjectClick={onAddProjectClick}
          />
        </Grid>

        <Grid
          className={styles.timetableGrid}
          css={{
            d: "flex",
            flexGrow: 1,
          }}
        >
          <TimetableGrid projects={projects} onGridChange={onGridChange} />
        </Grid>
      </Grid.Container>
    </motion.div>
  );
};

export default TimetableUserBlock;
