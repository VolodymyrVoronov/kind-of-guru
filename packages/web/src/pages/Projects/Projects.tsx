import React, { useState } from "react";

import trpc from "../../hooks/trpc";

import ContainerHeightWrapper from "../../components/ContainerHeightWrapper/ContainerHeightWrapper";

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

  console.log(dataProjects);

  return <ContainerHeightWrapper>Projects</ContainerHeightWrapper>;
};

export default Projects;
