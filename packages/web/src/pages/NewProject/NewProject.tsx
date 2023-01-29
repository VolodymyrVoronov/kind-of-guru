import { Spacer } from "@nextui-org/react";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

const NewProject = (): JSX.Element => {
  return (
    <ContainerHeightWrapper>
      <Spacer y={2} />
      <ProjectForm />
    </ContainerHeightWrapper>
  );
};

export default NewProject;
