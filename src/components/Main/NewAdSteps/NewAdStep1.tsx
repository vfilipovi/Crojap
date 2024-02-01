import { Input, Textarea } from "@nextui-org/react";
import { ComponentProps, FC, forwardRef, memo, useRef } from "react";
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hr from "date-fns/locale/hr";
import { useAdDispatch, useAdSelector } from "../../../store/hooks";
import {
  setAdName,
  setApplyDeadline,
  setCompanyName,
  setDateOfAdPublish,
  setLongDescription,
  setShortDescription,
} from "../../../store/ad-slice";
import { addWeeks } from "date-fns";

const NewAdStep1: FC<{ activeStep: number }> = ({ activeStep }) => {
  registerLocale("hr", hr);
  setDefaultLocale("hr"); // set default locale to Hrvatski

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const dispatch = useAdDispatch();
  const adState = useAdSelector((state) => state.ad);

  type CustomInputProps = ComponentProps<typeof Input>;

  const CustomInputDeadline = memo(
    forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
      return <Input {...props} ref={ref} />;
    })
  );
  const CustomInputAdActive = memo(
    forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
      return <Input {...props} ref={ref} />;
    })
  );

  return (
    <div
      className={`${
        activeStep === 1 ? "flex" : "hidden"
      } flex-1 min-h-[40dvh] justify-center flex-col *:w-full *:flex *:justify-center *:p-5`}
    >
      <div>
        <Input
          className="w-[40%]"
          type="text"
          label="Naziv kompanije"
          isRequired
          onValueChange={(e: string) => {
            dispatch(setCompanyName(e));
          }}
          value={adState.companyName}
          isInvalid={
            !adState.validation.companyName && adState.validation.validateStep1
          }
        />
      </div>
      <div>
        <Input
          className="w-[40%]"
          type="text"
          label="Naslov oglasa"
          isRequired
          onValueChange={(e: string) => {
            dispatch(setAdName(e));
          }}
          value={adState.adName}
          isInvalid={
            !adState.validation.adName && adState.validation.validateStep1
          }
        />
      </div>
      <div className="[&_.react-datepicker-wrapper]:w-[40%] [&_.relative]:!cursor-pointer [&_.react-datepicker-popper]:z-50">
        <ReactDatePicker
          customInput={
            <CustomInputDeadline
              label="Rok prijave"
              style={{ cursor: "pointer" }}
              inputRef={inputRef}
              isClearable={true}
              isRequired
              onClear={() => {
                dispatch(setApplyDeadline(null));
              }}
              isInvalid={
                !adState.validation.applyDeadline &&
                adState.validation.validateStep1
              }
            />
          }
          selected={
            adState.applyDeadline ? new Date(adState.applyDeadline) : null
          }
          onChange={(date: Date | null) =>
            dispatch(setApplyDeadline(date ? date.toString() : null))
          }
          ref={inputRef}
          minDate={new Date()}
          dateFormat={"dd-MM-yyyy"}
          showPopperArrow={false}
          openToDate={addWeeks(new Date(), 2)}
        />
      </div>

      <div className="[&_.react-datepicker-wrapper]:w-[40%] [&_.relative]:!cursor-pointer [&_.react-datepicker-popper]:z-50">
        <ReactDatePicker
          customInput={
            <CustomInputAdActive
              label="Datum objave oglasa"
              style={{ cursor: "pointer" }}
              inputRef={inputRef2}
              isClearable={true}
              isRequired
              onClear={() => {
                dispatch(setDateOfAdPublish(null));
              }}
              isInvalid={
                !adState.validation.dateOfAdPublish &&
                adState.validation.validateStep1
              }
            />
          }
          selected={
            adState.dateOfAdPublish ? new Date(adState.dateOfAdPublish) : null
          }
          onChange={(date: Date | null) =>
            dispatch(setDateOfAdPublish(date ? date.toString() : null))
          }
          ref={inputRef2}
          minDate={new Date()}
          dateFormat={"dd-MM-yyyy"}
          showPopperArrow={false}
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Kratki opis oglasa"
          description="Kratki opis oglasa koji će se prikazivati u  minijaturnoj kartici"
          maxLength={120}
          isRequired
          onValueChange={(e: string) => {
            dispatch(setShortDescription(e));
          }}
          isInvalid={
            !adState.validation.shortDescription &&
            adState.validation.validateStep1
          }
          value={adState.shortDescription}
        />
      </div>
      <div>
        <Textarea
          className="w-[40%]"
          label="Opis oglasa"
          description="Opis oglasa koji će se prikazivati kad se otvori oglas"
          maxLength={1000}
          isRequired
          onValueChange={(e: string) => {
            dispatch(setLongDescription(e));
          }}
          isInvalid={
            !adState.validation.longDescription &&
            adState.validation.validateStep1
          }
          value={adState.longDescription}
        />
      </div>
    </div>
  );
};

export default NewAdStep1;
