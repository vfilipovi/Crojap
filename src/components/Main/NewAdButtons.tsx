import { Button, Spacer } from "@nextui-org/react";
import { FC, useState } from "react";

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
  const [btnIsLoading, setBtnIsLoading] = useState(false);

  const handleNextBtn = () => {
    if (activeStep === steps.length) {
      //network req
    } else {
      setActiveStep(activeStep + 1);
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
    </div>
  );
};

export default NewAdButtons;
