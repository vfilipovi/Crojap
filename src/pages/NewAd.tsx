import { useState } from "react";
import Stepper from "../components/Main/Stepper";
import NewAdButtons from "../components/Main/NewAdButtons";

const NewAd = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [{ title: "info1" }, { title: "info2" }, { title: "info3" }];

  return (
    <div>
      <h2 className="text-4xl">Kreiranje novog oglasa</h2>
      <Stepper steps={steps} activeStep={activeStep} />
      <NewAdButtons
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default NewAd;
