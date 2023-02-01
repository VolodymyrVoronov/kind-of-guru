import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spacer } from "@nextui-org/react";

import trpc from "../../hooks/trpc";

import RoutePaths from "../../constants/routePaths";
import IProject from "../../types/Project";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import BadgeWrapper from "../../components/BadgeWrapper/BadgeWrapper";

const NewProject = (): JSX.Element => {
  const navigator = useNavigate();

  const { mutate, isLoading, isSuccess, isError, error } = trpc.useMutation([
    "createProject",
  ]);

  const onSaveClick = (projectData: IProject): void => {
    mutate(projectData);
  };

  useEffect(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigator(RoutePaths.Projects);

        clearTimeout(timeoutId);
      }, 1500);
    }
  }, [isSuccess, navigator]);

  return (
    <ContainerHeightWrapper>
      <div style={{ position: "absolute" }}>
        {isError && (
          <AnimatedWrapper>
            <BadgeWrapper
              size="md"
              color="error"
              text="Something has gone wrong."
              textMessage={error?.message}
            />
          </AnimatedWrapper>
        )}

        {isSuccess && (
          <AnimatedWrapper>
            <BadgeWrapper size="md" color="success" textMessage="Saved!" />
          </AnimatedWrapper>
        )}
      </div>

      <Spacer y={2} />
      <ProjectForm isLoading={isLoading} onSaveClick={onSaveClick} />
    </ContainerHeightWrapper>
  );
};

export default NewProject;
