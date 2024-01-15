import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
} from "@nextui-org/react";
import { FC, useState } from "react";
import { useAdDispatch, useAdSelector } from "../../store/hooks";
import { setValidateStep1, setValidateStep2 } from "../../store/ad-slice";
import ModalWrapper from "../UtilComponents/ModalWrapper";

type NewAdButtonsProps = {
  activeStep: number;
  steps: { title: string }[];
  setActiveStep: (activeStep: number) => void;
};

const NewAdButtons: FC<NewAdButtonsProps> = ({
  activeStep,
  steps,
  setActiveStep,
}) => {
  const dispatch = useAdDispatch();
  const adStateValidation = useAdSelector((state) => state.ad.validation);

  const [btnIsLoading, setBtnIsLoading] = useState(false);

  const handleNextBtn = () => {
    if (activeStep === steps.length) {
      //network req
    } else {
      if (activeStep === 1) {
        dispatch(setValidateStep1(true));
        if (
          adStateValidation.adName &&
          adStateValidation.companyName &&
          adStateValidation.applyDeadline &&
          adStateValidation.dateOfAdPublish &&
          adStateValidation.shortDescription &&
          adStateValidation.longDescription
        ) {
          setActiveStep(activeStep + 1);
        } else {
          //Validation check
        }
      }
      if (activeStep === 2) {
        dispatch(setValidateStep2(true));
        if (
          adStateValidation.category &&
          adStateValidation.educationLevel &&
          adStateValidation.yearsOfExperience &&
          adStateValidation.languages &&
          adStateValidation.employmentType &&
          adStateValidation.salary
        ) {
          setActiveStep(activeStep + 1);
        }
      }
    }
  };

  const previousBtnHandler = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex justify-center mt-12">
      {activeStep > 1 && (
        <>
          <Button onClick={previousBtnHandler}>Prethodni korak</Button>
          <Spacer x={12} />
        </>
      )}
      <Button isLoading={btnIsLoading} onClick={handleNextBtn}>
        {activeStep === steps.length ? "Predaj oglas" : "Sljedeći korak"}
      </Button>
      //Napravi da se otvori modal, kad je validacija neuspješna
      <ModalWrapper />
    </div>
  );
};

export default NewAdButtons;
