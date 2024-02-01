import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Spacer,
} from "@nextui-org/react";
import { categories, counties } from "../components/Main/NewAdSteps/NewAdStep2";

const SearchPage = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Autocomplete label="Odaberite Županiju" className="max-w-md">
          {counties.map((county) => (
            <AutocompleteItem key={county.value} value={county.value}>
              {county.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Spacer x={8} />

        <Autocomplete label="Odaberite kategoriju" className="max-w-md">
          {categories.map((category) => (
            <AutocompleteItem key={category.value} value={category.value}>
              {category.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
      <div className="mt-6">
        <Button>Pretraži</Button>
      </div>
    </>

    //1
  );
};

export default SearchPage;
