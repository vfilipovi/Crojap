import { Input, Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";

const animals = [
  {
    label: "Srednja stručna sprema",
    value: "SSS",
    description: "The second most popular pet in the world",
  },
  {
    label: "Nekvalificirani",
    value: "NKV",
    description: "The most popular pet in the world",
  },
];

const languages = [
  {
    label: "Hrvatski",
    value: "cro",
  },
  {
    label: "Engleski",
    value: "eng",
  },
  {
    label: "Talijanski",
    value: "ita",
  },
];

const contractTypes = [
  {
    label: "Neodređeno",
    value: "neodređeno",
  },
  {
    label: "Honorarno",
    value: "honorarno",
  },
];

const NewAdStep2: FC<{ activeStep: number }> = ({ activeStep }) => {
  return (
    <div
      className={`${
        activeStep === 2 ? "flex" : "hidden"
      } flex-1 min-h-[40dvh] justify-center flex-col *:w-full *:flex *:justify-center *:p-5`}
    >
      <div>
        <Select
          items={animals}
          label="Odaberite stručnu spremu"
          className="w-[40%]"
        >
          {(animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          )}
        </Select>
      </div>
      <div>
        <Input
          className="w-[40%]"
          type="number"
          label="Potrebnih godina iskustva"
          min={0}
          max={40}
        />
      </div>
      <div>
        <Select
          label="Odaberite jezike"
          selectionMode="multiple"
          className="w-[40%]"
        >
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          label="Odaberite tip/ove ugovora"
          selectionMode="multiple"
          className="w-[40%]"
        >
          {contractTypes.map((contractType) => (
            <SelectItem key={contractType.value} value={contractType.value}>
              {contractType.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Input
          className="w-[40%]"
          type="number"
          label="Plaća u €"
          min={0}
          max={100000}
          description={"0 označava sakriveni iznos plaće"}
        />
      </div>
    </div>
  );
};

export default NewAdStep2;
