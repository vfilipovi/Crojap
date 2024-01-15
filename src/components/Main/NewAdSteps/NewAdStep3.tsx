import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { FC, useState } from "react";

const drivingLicenseCat = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
  { label: "C", value: "c" },
];

const NewAdStep3: FC<{ activeStep: number }> = ({ activeStep }) => {
  const [selected, setSelected] = useState("ne");

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
        />
      </div>
      <div>
        <Textarea
          isRequired
          className="w-[40%]"
          label="Obavezne vještine"
          maxLength={1000}
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Što nudimo kao poslodavac"
          maxLength={2000}
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
        />
      </div>
      <div>
        <RadioGroup
          isRequired
          label="Potrebna vozačka dozvola?"
          value={selected}
          onValueChange={setSelected}
        >
          <Radio value="da">Da</Radio>
          <Radio value="ne">Ne</Radio>
        </RadioGroup>
      </div>
      {selected === "da" ? (
        <div>
          <Select isRequired label="Odaberite kategoriju" className="w-[40%]">
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
