import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";

import IProject from "../../types/Project";

import reverseDateString from "../../helpers/reverseDateString";
import getPackageTypeIcon from "../../helpers/getPackageTypeIcon";
import getPriorityIcon from "../../helpers/getPriorityIcon";

import CustomModal from "../CustomModal/CustomModal";

interface IProjectData extends IProject {
  id: number;
}

interface IProjectCardProps {
  project: IProjectData;
  onDeleteClick: (id: number) => void;
  onEditClick: (id: number) => void;
}

const ProjectCard = ({
  project,
  onDeleteClick,
  onEditClick,
}: IProjectCardProps): JSX.Element => {
  const {
    id,
    projectName,
    client,
    information,
    priority,
    packageType,
    start,
    end,
  } = project;

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const onDeleteCardButtonClick = (): void => {
    setIsPopoverVisible(true);
  };

  const onEditButtonClick = (): void => {
    onEditClick(id);
  };

  const onCancelButtonClick = (): void => {
    setIsPopoverVisible(false);
  };

  const onConfirmDeleteButtonClick = (): void => {
    onDeleteClick(id);
    setIsPopoverVisible(false);
  };

  return (
    <Card
      css={{
        alignSelf: "flex-start",
        p: "$10",
        background: "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
      }}
    >
      <CustomModal
        title="Confirm"
        text="Are you sure you want to delete this project ? By doing this, you will not be able to recover the data."
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
      T
    </Card>
  );
};

export default ProjectCard;
