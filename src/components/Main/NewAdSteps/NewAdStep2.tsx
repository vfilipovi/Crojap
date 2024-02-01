import { Input, Select, SelectItem } from "@nextui-org/react";
import { ChangeEvent, FC } from "react";
import { useAdDispatch, useAdSelector } from "../../../store/hooks";
import {
  setCategory,
  setCounty,
  setEducationLevel,
  setEmploymentType,
  setLanguages,
  setSalary,
  setYearsOfExperience,
} from "../../../store/ad-slice";

export const counties = [
  {
    label: "Grad Zagreb",
    value: "zagreb",
  },
  {
    label: "Zagrebačka",
    value: "zagrebacka",
  },
  {
    label: "Istarska",
    value: "istarska",
  },
  {
    label: "Karlovačka",
    value: "karlovacka",
  },
  {
    label: "Splitsko-dalmatinska",
    value: "splitskodalmatinska",
  },
  {
    label: "Varaždinska",
    value: "varazdinska",
  },
  {
    label: "Požeško-slavonska",
    value: "pozeskoslavonska",
  },
];

const educationLevels = [
  {
    label: "Nekvalificirani",
    value: "NKV",
  },
  {
    label: "Kvalificirani",
    value: "KV",
  },
  {
    label: "Visokokvalificirani",
    value: "VKV",
  },
  {
    label: "Srednja stručna sprema",
    value: "SSS",
  },
  {
    label: "Viša stručna sprema",
    value: "VŠS",
  },
  {
    label: "Magisterij",
    value: "mag",
  },
  {
    label: "Doktorat",
    value: "dr",
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
  {
    label: "Stalni radni odnos",
    value: "stalno",
  },
  {
    label: "Praksa",
    value: "praksa",
  },
  {
    label: "Volontiranje",
    value: "volontiranje",
  },
  {
    label: "Rad na određeno",
    value: "određeno",
  },
];

export const categories = [
  {
    label: "IT",
    value: "it",
  },
  {
    label: "Turizam i ugostiteljstvo",
    value: "turizam-gostiteljstvo",
  },
  {
    label: "Financije, računvodstvo",
    value: "financije-racunovodstvo",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Prodaja",
    value: "prodaja",
  },
  {
    label: "Sigurnost i zaštita",
    value: "sigurnost-zastita",
  },
];

const NewAdStep2: FC<{ activeStep: number }> = ({ activeStep }) => {
  const dispatch = useAdDispatch();
  const adState = useAdSelector((state) => state.ad);

  return (
    <div
      className={`${
        activeStep === 2 ? "flex" : "hidden"
      } flex-1 min-h-[40dvh] justify-center flex-col *:w-full *:flex *:justify-center *:p-5`}
    >
      <div>
        <Select
          isRequired
          label="Odaberite kategoriju"
          className="w-[40%]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setCategory(e.target.value));
          }}
          value={[adState.category]}
          isInvalid={
            !adState.validation.category && adState.validation.validateStep2
          }
        >
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Select
          isRequired
          label="Odaberite županiju"
          className="w-[40%]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setCounty(e.target.value));
          }}
          value={[adState.county]}
          isInvalid={
            !adState.validation.county && adState.validation.validateStep2
          }
        >
          {counties.map((county) => (
            <SelectItem key={county.value} value={county.value}>
              {county.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div>
        <Select
          isRequired
          items={educationLevels}
          label="Odaberite stručnu spremu"
          className="w-[40%]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setEducationLevel(e.target.value));
          }}
          value={[adState.educationLevel]}
          isInvalid={
            !adState.validation.educationLevel &&
            adState.validation.validateStep2
          }
        >
          {educationLevels.map((educationLevel) => (
            <SelectItem key={educationLevel.value}>
              {educationLevel.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <Input
          isRequired
          className="w-[40%]"
          type="number"
          label="Potrebnih godina iskustva"
          min={0}
          max={40}
          onValueChange={(e: string) => {
            dispatch(setYearsOfExperience(+e));
          }}
          // value={adState.yearsOfExperience?.toString()}
          value={
            adState.yearsOfExperience
              ? adState.yearsOfExperience.toString()
              : "0"
          }
          isInvalid={
            !adState.validation.yearsOfExperience &&
            adState.validation.validateStep2
          }
        />
      </div>
      <div>
        <Select
          isRequired
          label="Odaberite jezike"
          selectionMode="multiple"
          className="w-[40%]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setLanguages(e.target.value));
          }}
          value={adState.languages?.split(",")}
          isInvalid={
            !adState.validation.languages && adState.validation.validateStep2
          }
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
          isRequired
          label="Odaberite tip/ove ugovora"
          selectionMode="multiple"
          className="w-[40%]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setEmploymentType(e.target.value));
          }}
          // selectedKeys={}
          value={adState.employmentType?.split(",")}
          isInvalid={
            !adState.validation.employmentType &&
            adState.validation.validateStep2
          }
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
          type="text"
          label="Plaća (bruto 1)"
          maxLength={9}
          onValueChange={(e: string) => {
            dispatch(setSalary(e));
          }}
          value={adState.salary}
          isInvalid={
            !adState.validation.salary && adState.validation.validateStep2
          }
        />
      </div>
    </div>
  );
};

export default NewAdStep2;
