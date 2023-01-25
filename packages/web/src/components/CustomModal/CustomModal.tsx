import { ReactNode } from "react";
import { Text, Grid, Modal } from "@nextui-org/react";

import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

interface ICustomModalProps {
  title: string;
  text?: string;
  isVisible: boolean;
  onClose: () => void;
  width?: string;
  cancelButton: ReactNode;
  confirmButton: ReactNode;
}

const CustomModal = ({
  title,
  text,
  isVisible,
  onClose,
  width = "350px",
  cancelButton,
  confirmButton,
}: ICustomModalProps): JSX.Element => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.1,
    },
  };

  return (
    <AnimatedWrapper animation={variants}>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isVisible}
        onClose={onClose}
        width={width}
      >
        <Modal.Header>
          <Text h4 b>
            {title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>{text}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Grid.Container
            justify="space-between"
            alignContent="center"
            css={{ mt: "$3" }}
          >
            <Grid>{cancelButton}</Grid>
            <Grid>{confirmButton}</Grid>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </AnimatedWrapper>
  );
};

export default CustomModal;
