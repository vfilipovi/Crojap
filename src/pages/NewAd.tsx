import { useState } from "react";
import Stepper from "../components/Main/Stepper";
import NewAdButtons from "../components/Main/NewAdButtons";
import NewAdStep1 from "../components/Main/NewAdSteps/NewAdStep1";
import NewAdStep2 from "../components/Main/NewAdSteps/NewAdStep2";
import NewAdStep3 from "../components/Main/NewAdSteps/NewAdStep3";

const NewAd = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [{ title: "info1" }, { title: "info2" }, { title: "info3" }];

  return (
    <div>
      <h2 className="text-4xl">Kreiranje novog oglasa</h2>
      <Stepper steps={steps} activeStep={activeStep} />

      <NewAdStep1 activeStep={activeStep} />
      <NewAdStep2 activeStep={activeStep} />
      <NewAdStep3 activeStep={activeStep} />

      <NewAdButtons
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default NewAd;
