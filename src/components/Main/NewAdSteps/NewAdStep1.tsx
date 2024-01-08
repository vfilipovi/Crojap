import { Input, Textarea } from "@nextui-org/react";

import { ComponentProps, FC, forwardRef, useRef, useState } from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hr from "date-fns/locale/hr";

const NewAdStep1: FC<{ activeStep: number }> = ({ activeStep }) => {
  registerLocale("hr", hr);
  setDefaultLocale("hr"); // set default locale to Hrvatski

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  type CustomInputProps = ComponentProps<typeof Input>;

  const CustomInputDeadline = forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
      return <Input {...props} ref={ref} />;
    }
  );

  const CustomInputAdActive = forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
      return <Input {...props} ref={ref} />;
    }
  );

  return (
    <div
      className={`${
        activeStep === 1 ? "flex" : "hidden"
      } flex-1 min-h-[40dvh] justify-center flex-col *:w-full *:flex *:justify-center *:p-5`}
    >
      <div>
        <Input className="w-[40%]" type="text" label="Naziv kompanije" />
      </div>
      <div>
        <Input className="w-[40%]" type="text" label="Naslov oglasa" />
      </div>
      <div className="[&_.react-datepicker-wrapper]:w-[40%] [&_.relative]:!cursor-pointer [&_.react-datepicker-popper]:z-50">
        <ReactDatePicker
          customInput={
            <CustomInputDeadline
              label="Rok prijave"
              style={{ cursor: "pointer" }}
              inputRef={inputRef}
              isClearable={true}
              onClear={() => {
                setStartDate(null);
              }}
            />
          }
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          ref={inputRef}
        />
      </div>
      <div className="[&_.react-datepicker-wrapper]:w-[40%] [&_.react-datepicker-popper]:z-50">
        <ReactDatePicker
          customInput={
            <CustomInputAdActive
              label="Datum objave oglasa"
              style={{ cursor: "pointer" }}
              inputRef={inputRef2}
              isClearable={true}
              onClear={() => {
                setDate2(null);
              }}
            />
          }
          selected={date2}
          onChange={(date: Date | null) => setDate2(date)}
          ref={inputRef2}
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Kratki opis oglasa"
          description="Kratki opis oglasa koji će se prikazivati u kartici"
          maxLength={120}
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Opis oglasa"
          description="Opis oglasa koji će se prikazivati u kad se otvori cijeli oglas"
          maxLength={1000}
        />
      </div>
    </div>
  );
};

export default NewAdStep1;
