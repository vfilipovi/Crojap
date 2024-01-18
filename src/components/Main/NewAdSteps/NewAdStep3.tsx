import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { ChangeEvent, FC, useState } from "react";
import { useAdDispatch, useAdSelector } from "../../../store/hooks";
import {
  setConditions,
  setDrivingLicense,
  setDrivingLicenseValidation,
  setEmail,
  setRequiredSkills,
  setWhatEmployerOffers,
} from "../../../store/ad-slice";

const drivingLicenseCat = [
  { label: "B", value: "b" },
  { label: "BE", value: "be" },
  { label: "C", value: "c" },
  { label: "CE", value: "ce" },
  { label: "D", value: "d" },
  { label: "F", value: "f" },
  { label: "H", value: "h" },
];

const NewAdStep3: FC<{ activeStep: number }> = ({ activeStep }) => {
  const [isDrivingLicenseRequired, setIsDrivingLicenseRequired] =
    useState("ne");
  const dispatch = useAdDispatch();
  const adState = useAdSelector((state) => state.ad);

  return (
    <div
      className={`${
        activeStep === 3 ? "flex" : "hidden"
      } flex-1 min-h-[40dvh] justify-center flex-col *:w-full *:flex *:justify-center *:p-5`}
    >
      <div>
        <Textarea
          isRequired
          className="w-[40%]"
          label="Uvjeti"
          description="Uvjeti za zaposlenje"
          maxLength={1000}
          onValueChange={(e: string) => {
            dispatch(setConditions(e));
          }}
          value={adState.conditions}
          isInvalid={
            !adState.validation.conditions && adState.validation.validateStep3
          }
        />
      </div>
      <div>
        <Textarea
          isRequired
          className="w-[40%]"
          label="Obavezne vještine"
          maxLength={1000}
          onValueChange={(e: string) => {
            dispatch(setRequiredSkills(e));
          }}
          value={adState.requiredSkills}
          isInvalid={
            !adState.validation.requiredSkills &&
            adState.validation.validateStep3
          }
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Što nudimo kao poslodavac"
          maxLength={2000}
          onValueChange={(e: string) => {
            dispatch(setWhatEmployerOffers(e));
          }}
          value={adState.whatEmployerOffers}
          isInvalid={
            !adState.validation.whatEmployerOffers &&
            adState.validation.validateStep3
          }
        />
      </div>
      <div>
        <Textarea className="w-[40%]" label="Napomena" maxLength={2000} />
      </div>
      <div>
        <Input
          isRequired
          className="w-[40%]"
          type="email"
          label="Email"
          description="Email adresa na koju kandidati šalju prijave"
          onValueChange={(e: string) => {
            dispatch(setEmail(e));
          }}
          value={adState.email}
          isInvalid={
            !adState.validation.email && adState.validation.validateStep3
          }
        />
      </div>
      <div>
        <RadioGroup
          isRequired
          label="Potrebna vozačka dozvola?"
          value={isDrivingLicenseRequired}
          onValueChange={(e: string) => {
            if (e === "da") {
              setIsDrivingLicenseRequired(e);
              dispatch(setDrivingLicenseValidation(false));
            } else if (e === "ne") {
              setIsDrivingLicenseRequired(e);
              dispatch(setDrivingLicenseValidation(true));
            }
          }}
        >
          <Radio value="da">Da</Radio>
          <Radio value="ne">Ne</Radio>
        </RadioGroup>
      </div>
      {isDrivingLicenseRequired === "da" ? (
        <div>
          <Select
            isRequired
            label="Odaberite kategoriju"
            className="w-[40%]"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              dispatch(setDrivingLicense(e.target.value));
            }}
            value={adState.drivingLicense}
            isInvalid={
              !adState.validation.drivingLicense &&
              adState.validation.validateStep3
            }
          >
            {drivingLicenseCat.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      ) : null}
    </div>
  );
};

export default NewAdStep3;
