import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { ImPaintFormat, ImMan, ImEnter, ImExit, ImInfo } from "react-icons/im";
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";

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
        text="Are you sure you want to delete this project? By doing this, you will not be able to recover the data."
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

      <Grid.Container gap={0.5}>
        <Grid xs={4} alignItems="baseline" direction="column">
          <Text
            h4
            css={{
              d: "flex",
              alignItems: "baseline",
              m: 0,
            }}
          >
            Project: <Spacer x={0.5} />{" "}
            <ImPaintFormat display="flex" size="16px" />
          </Text>
          <Text
            h3
            css={{
              m: 0,
              color: "$blue600",
            }}
          >
            {projectName}
          </Text>
        </Grid>

        <Grid xs={4} direction="column">
          <Text
            h4
            css={{
              d: "flex",
              alignItems: "baseline",
              m: 0,
            }}
          >
            Client: <Spacer x={0.5} /> <ImMan display="flex" size="16px" />
          </Text>
          <Text
            h3
            css={{
              m: 0,
              color: "$blue600",
            }}
          >
            {client}
          </Text>
        </Grid>
        <Grid xs={4}>
          <Grid.Container justify="space-between">
            <Grid xs={5} direction="column">
              <Text
                h4
                css={{
                  d: "flex",
                  alignItems: "baseline",
                  m: 0,
                }}
              >
                Start: <Spacer x={0.5} />
                <Tooltip color="invert" content="Start date of the project">
                  <ImEnter display="flex" size="16px" />
                </Tooltip>
              </Text>
              {start ? (
                <Text
                  h4
                  css={{
                    m: 0,
                    color: "$blue600",
                  }}
                >
                  {reverseDateString(start)}
                </Text>
              ) : (
                <Text
                  b
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                >
                  unknown
                </Text>
              )}
            </Grid>
            <Grid xs={5} direction="column">
              <Text
                h4
                css={{
                  d: "flex",
                  alignItems: "baseline",
                  m: 0,
                }}
              >
                End: <Spacer x={0.5} />
                <Tooltip color="invert" content="End date of the project">
                  <ImExit display="flex" size="16px" />
                </Tooltip>
              </Text>
              {end ? (
                <Text
                  h4
                  css={{
                    m: 0,
                    color: "$blue600",
                  }}
                >
                  {reverseDateString(end)}
                </Text>
              ) : (
                <Text
                  b
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                >
                  unknown
                </Text>
              )}
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>

      <Spacer x={1} />

      <Grid.Container gap={1}>
        <Grid xs={7.5} direction="column">
          <Text
            h4
            css={{
              d: "flex",
              alignItems: "center",
              m: 0,
            }}
          >
            Information: <Spacer x={0.5} />
            <ImInfo display="flex" size="16px" />
          </Text>
          {information ? (
            <Text b>{information}</Text>
          ) : (
            <Text
              b
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
            >
              unknown
            </Text>
          )}
        </Grid>

        <Spacer x={1.5} />

        <Grid xs={4} direction="row">
          <Grid.Container justify="space-between">
            <Grid xs={5} direction="row" alignItems="flex-start">
              <Text
                h4
                css={{
                  d: "flex",
                  alignItems: "center",
                  m: 0,
                }}
              >
                Priority: <Spacer x={0.5} />
                {getPriorityIcon(priority.toLowerCase())}
              </Text>
            </Grid>
            <Grid xs={5} direction="row" alignItems="flex-start">
              <Text
                h4
                css={{
                  d: "flex",
                  alignItems: "center",
                  m: 0,
                }}
              >
                Package: <Spacer x={0.5} />
                {getPackageTypeIcon(packageType.toLowerCase())}
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Container
        display="flex"
        direction="row"
        justify="flex-end"
        css={{
          width: "100%",
          padding: "0",
        }}
      >
        <Button
          onPress={onDeleteCardButtonClick}
          size="md"
          ghost
          rounded
          color="error"
          iconRight={<IoTrashSharp />}
        >
          Delete
        </Button>

        <Spacer x={1} />

        <Button
          onPress={onEditButtonClick}
          size="md"
          rounded
          color="gradient"
          iconRight={<IoPencilSharp />}
        >
          Edit
        </Button>
      </Container>
    </Card>
  );
};

export default ProjectCard;
