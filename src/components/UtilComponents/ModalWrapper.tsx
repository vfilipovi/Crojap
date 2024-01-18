import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FC } from "react";

type modelWrapperProps = {
  title: string;
  content: string;
  openModal: boolean;
  closeBtnText?: string;
  onModalClose: (setIsModalActive: boolean) => void;
};

const ModalWrapper: FC<modelWrapperProps> = ({
  title,
  content,
  openModal,
  closeBtnText = "Zatvori",
  onModalClose,
}) => {
  return (
    <Modal
      isOpen={openModal}
      onClose={() => {
        onModalClose(false);
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{content}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {closeBtnText}
              </Button>
              {/* <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
