import { useEffect, useState } from "react";
import { Layout } from "react-grid-layout";
import {
  Grid,
  Modal,
  useModal,
  Text,
  Container,
  Loading,
  Button,
  Badge,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import useAppStore, { IUserTimetable } from "../../store/app.store";

import trpc from "../../hooks/trpc";

import TimetableUser from "../TimetableUser/TimetableUser";
import TimetableGrid from "../TimetableGrid/TimetableGrid";
import ProjectCardMini from "../ProjectCardMini/ProjectCardMini";
import CustomModal from "../CustomModal/CustomModal";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

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
    deleteProjectFromTimetableUser,
    updatedUserProjectTimetable,
    projects: storeProjects,
  } = useAppStore();

  const { id: userId, projects } = timetableUser;

  const { setVisible, bindings } = useModal();
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState<number>();

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

  const onProjectRightClick = (projectId: number): void => {
    setProjectIdToDelete(projectId);
    setIsPopoverVisible(true);
  };

  const onCancelButtonClick = (): void => {
    setIsPopoverVisible(false);
  };

  const onConfirmDeleteButtonClick = (): void => {
    if (projectIdToDelete) {
      deleteProjectFromTimetableUser(userId, projectIdToDelete);
      setIsPopoverVisible(false);
    }
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
      <CustomModal
        title="Are you sure you want to delete this project from the timetable?"
        isVisible={isPopoverVisible}
        onClose={onCancelButtonClick}
        cancelButton={
          <Button onPress={onCancelButtonClick} size="sm" light bordered>
            Cancel
          </Button>
        }
        confirmButton={
          <Button
            onPress={onConfirmDeleteButtonClick}
            size="sm"
            shadow
            color="error"
          >
            Delete
          </Button>
        }
      />

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
              jc: "center",
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

            {isErrorFetchProjects && (
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
                    {errorFetchProjects?.message}
                  </Badge>
                </Container>
              </AnimatedWrapper>
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
          <TimetableGrid
            projects={projects}
            onGridChange={onGridChange}
            onProjectRightClick={onProjectRightClick}
          />
        </Grid>
      </Grid.Container>
    </motion.div>
  );
};

export default TimetableUserBlock;
