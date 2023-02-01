import { useCallback, useEffect, useState } from "react";
import {
  Badge,
  Container,
  Grid,
  Loading,
  Modal,
  Progress,
  Spacer,
  Text,
} from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import IProject from "../../types/Project";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import BadgeWrapper from "../../components/BadgeWrapper/BadgeWrapper";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

interface IProjectData extends IProject {
  id?: number;
}

const Projects = (): JSX.Element => {
  const utils = trpc.useContext();

  const [showBadgeBox, setShowBadgeBox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState(0);

  const {
    data: dataProject,
    isLoading: isLoadingFetchProject,
    isError: isErrorFetchProject,
    error: errorFetchProject,
  } = trpc.useQuery(["getProject", { id: projectId }]);

  const {
    data: dataProjects,
    isLoading: isLoadingFetchProjects,
    isError: isErrorFetchProjects,
    error: errorFetchProjects,
  } = trpc.useQuery(["getProjects"]);

  const {
    mutate: mutateDeleteProject,
    isSuccess: isSuccessMutateDeleteProject,
    isError: isErrorMutateDeleteProject,
    error: errorMutateDeleteProject,
  } = trpc.useMutation(["deleteProject"]);

  const {
    mutate: mutateUpdatedProject,
    isLoading: isLoadingUpdateProject,
    isSuccess: isSuccessUpdateProject,
    isError: isErrorUpdateProject,
    error: errorUpdateProject,
  } = trpc.useMutation(["updateProject"]);

  const onDeleteClick = (id: number): void => {
    mutateDeleteProject({ id });
  };

  const onEditClick = (id: number): void => {
    setShowModal(true);
    setProjectId(id);
  };

  const onModalCloseClick = (): void => {
    setShowModal(false);
  };

  const onSaveClick = (data: IProjectData): void => {
    mutateUpdatedProject({ id: projectId, ...data });
  };

  const refetchProjects = useCallback(() => {
    if (isSuccessMutateDeleteProject || isSuccessUpdateProject) {
      const timeoutId = setTimeout(() => {
        utils.invalidateQueries();

        clearTimeout(timeoutId);
      }, 500);
    }
  }, [isSuccessMutateDeleteProject, isSuccessUpdateProject, utils]);

  useEffect(() => {
    setShowBadgeBox(true);
    setShowModal(false);

    refetchProjects();

    const timeoutId = setTimeout(() => {
      setShowBadgeBox(false);

      clearTimeout(timeoutId);
    }, 5000);
  }, [refetchProjects]);

  return (
    <ContainerHeightWrapper>
      <Modal
        closeButton
        aria-labelledby="Edit project form"
        open={showModal}
        onClose={onModalCloseClick}
        width="1225px"
      >
        <Modal.Header>
          <Text b h3>
            Edit project
          </Text>
        </Modal.Header>
        <Modal.Body
          css={{
            p: 0,
            pb: 24,
          }}
        >
          {!isLoadingFetchProject && dataProject ? (
            <ProjectForm
              data={dataProject}
              isLoading={isLoadingUpdateProject}
              onSaveClick={onSaveClick}
            />
          ) : (
            <Loading size="xl" />
          )}

          {isErrorFetchProject && (
            <AnimatedWrapper>
              <Container
                justify="center"
                css={{
                  d: "flex",
                  w: "100%",
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
                  {errorFetchProject?.message}
                </Badge>
              </Container>
            </AnimatedWrapper>
          )}
        </Modal.Body>
      </Modal>

      {showBadgeBox && (
        <div style={{ position: "absolute" }}>
          {isErrorFetchProjects && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorFetchProjects?.message}
              />
            </AnimatedWrapper>
          )}

          {isErrorMutateDeleteProject && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorMutateDeleteProject?.message}
              />
            </AnimatedWrapper>
          )}

          {isErrorUpdateProject && (
            <AnimatedWrapper>
              <BadgeWrapper
                size="md"
                color="error"
                text="Something has gone wrong."
                textMessage={errorUpdateProject?.message}
              />
            </AnimatedWrapper>
          )}

          {isSuccessMutateDeleteProject && (
            <AnimatedWrapper>
              <BadgeWrapper size="md" color="success" textMessage="Deleted!" />
            </AnimatedWrapper>
          )}

          {isSuccessUpdateProject && (
            <AnimatedWrapper>
              <BadgeWrapper size="md" color="success" textMessage="Updated!" />
            </AnimatedWrapper>
          )}
        </div>
      )}

      {isLoadingFetchProjects ? (
        <Progress
          indeterminated
          value={50}
          color="gradient"
          status="secondary"
          css={{
            borderRadius: 0,
          }}
        />
      ) : (
        <>
          <Spacer y={1} />
          <Container sm>
            <Grid.Container gap={2}>
              {dataProjects?.map((project) => {
                return (
                  <Grid xs={12} key={project.id}>
                    <ProjectCard
                      project={project}
                      onDeleteClick={onDeleteClick}
                      onEditClick={onEditClick}
                    />
                  </Grid>
                );
              })}
            </Grid.Container>
          </Container>
        </>
      )}
    </ContainerHeightWrapper>
  );
};

export default Projects;
