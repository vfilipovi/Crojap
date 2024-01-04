import { FC } from "react";

type StepperProps = {
  steps: { title: string }[];
  activeStep: number;
};

const Stepper: FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex justify-between items-center w-3/4">
        {steps.map((step, index) => (
          <>
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                index + 1 < activeStep
                  ? "border-theme-blue-200 bg-theme-blue-200 text-white" // Green color for completed steps
                  : index + 1 === activeStep
                  ? "border-theme-blue-700 bg-theme-blue-700 text-white animate-pulse" // Blue color for active step
                  : "border-gray-300 text-gray-500" // Default color for inactive steps
              }`}
            >
              {index + 1}
            </div>{" "}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 border-t-3 ${
                  index + 1 < activeStep && "border-theme-blue-200"
                }`}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
