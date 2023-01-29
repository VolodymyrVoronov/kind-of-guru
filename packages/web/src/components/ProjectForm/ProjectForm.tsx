import { Card, Container } from "@nextui-org/react";

interface IProjectFormProps {
  data?: any | null;
  isLoading: boolean;
  onSaveClick: (projectData: any) => void;
}

const ProjectForm = ({
  data,
  isLoading,
  onSaveClick,
}: IProjectFormProps): JSX.Element => {
  return (
    <Container md>
      <Card
        css={{
          background: "linear-gradient(-45deg, #0072f53d -20%, #ff4ecd39 80%)",
        }}
      >
        <Card.Body>ProjectForm</Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectForm;
