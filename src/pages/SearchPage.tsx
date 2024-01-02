import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Spacer,
} from "@nextui-org/react";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
];

const SearchPage = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-full">
        <Autocomplete label="Odaberite Županiju" className="max-w-md">
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Spacer x={8} />

        <Autocomplete label="Odaberite kategoriju" className="max-w-md">
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
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
