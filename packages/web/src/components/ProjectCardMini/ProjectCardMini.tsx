import { Card, Grid, Spacer, Text, Tooltip } from "@nextui-org/react";
import { ImPaintFormat, ImMan, ImEnter, ImExit } from "react-icons/im";

import IProject from "../../types/Project";

import reverseDateString from "../../helpers/reverseDateString";

interface IProjectData extends IProject {
  id: number;
}

interface IProjectCardMiniProps {
  project: IProjectData;
  onProjectCardMiniClick: (id: number) => void;
}

const ProjectCardMini = ({
  project,
  onProjectCardMiniClick,
}: IProjectCardMiniProps): JSX.Element => {
  const { id, projectName, client, start, end } = project;

  const onCardClick = (): void => {
    onProjectCardMiniClick(id);
  };

  return (
    <Card
      isHoverable
      isPressable
      onPress={onCardClick}
      css={{
        alignSelf: "flex-start",
        mb: "$10",
        p: "$5",
        background: "linear-gradient(-45deg, #0072f522 -20%, #ff4ecd24 80%)",
      }}
    >
      <Grid.Container gap={0.5}>
        <Grid xs={6} alignItems="baseline" direction="column">
          <Text
            h5
            css={{
              d: "flex",
              alignItems: "baseline",
              m: 0,
            }}
          >
            Project: <Spacer x={0.5} />
            <ImPaintFormat display="flex" size="16px" />
          </Text>
          <Text
            h4
            css={{
              m: 0,
              color: "$blue600",
            }}
          >
            {projectName}
          </Text>
        </Grid>

        <Grid xs={6} direction="column">
          <Text
            h5
            css={{
              d: "flex",
              alignItems: "baseline",
              m: 0,
            }}
          >
            Client: <Spacer x={0.5} /> <ImMan display="flex" size="16px" />
          </Text>
          <Text
            h4
            css={{
              m: 0,
              color: "$blue600",
            }}
          >
            {client}
          </Text>
        </Grid>

        <Spacer y={0.5} />

        <Grid xs={12}>
          <Grid.Container justify="space-between">
            <Grid xs={6} direction="column">
              <Text
                h5
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
                  h5
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
            <Grid xs={6} direction="column">
              <Text
                h5
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
                  h5
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
    </Card>
  );
};

export default ProjectCardMini;
