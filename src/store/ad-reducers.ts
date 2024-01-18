// Reducers for ad state with validation
import { PayloadAction } from "@reduxjs/toolkit";
import { AdType } from "./ad-slice";

export const setCompanyNameReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.companyName = action.payload || "";
  state.validation.companyName = !!action.payload;
};

export const setAdNameReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.adName = action.payload || "";
  state.validation.adName = !!action.payload;
};

export const setApplyDeadlineReducer = (
  state: AdType,
  action: PayloadAction<string | null>
) => {
  state.applyDeadline = action.payload || null;
  state.validation.applyDeadline = !!action.payload;
};

export const setDateOfAdPublishReducer = (
  state: AdType,
  action: PayloadAction<{ dateOfAdPublish: Date | null }>
) => {
  state.dateOfAdPublish = action.payload.dateOfAdPublish || null;
  state.validation.dateOfAdPublish = !!action.payload.dateOfAdPublish;
};

export const setShortDescriptionReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.shortDescription = action.payload || "";
  state.validation.shortDescription = !!action.payload;
};

export const setLongDescriptionReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.longDescription = action.payload || "";
  state.validation.longDescription = !!action.payload;
};

export const setCategoryReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.category = action.payload || "";
  state.validation.category = !!action.payload;
};

export const setCountyReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.county = action.payload || "";
  state.validation.county = !!action.payload;
};

export const setEducationLevelReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.educationLevel = action.payload || "";
  state.validation.educationLevel = !!action.payload;
};

export const setYearsOfExperienceReducer = (
  state: AdType,
  action: PayloadAction<number>
) => {
  state.yearsOfExperience = action.payload || 0;
  state.validation.yearsOfExperience = !!action.payload;
};

export const setLanguagesReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.languages = action.payload || null;
  state.validation.languages = !!action.payload;
};

export const setEmploymentTypeReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.employmentType = action.payload || null;
  state.validation.employmentType = !!action.payload;
};

export const setSalaryReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  //String contains only numbers, commas, and dots
  const regex = /^[0-9.,]+$/;
  if (regex.test(action.payload)) {
    state.salary = action.payload || "";
    state.validation.salary = !!action.payload;
  } else if (action.payload === "") {
    state.salary = "";
    state.validation.salary = true;
  } else {
    state.salary = action.payload || "";
    state.validation.salary = false;
  }
};

export const setConditionsReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.conditions = action.payload || "";
  state.validation.conditions = !!action.payload;
};

export const setRequiredSkillsReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.requiredSkills = action.payload || "";
  state.validation.requiredSkills = !!action.payload;
};

export const setWhatEmployerOffersReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.whatEmployerOffers = action.payload || "";
  state.validation.whatEmployerOffers = !!action.payload;
};

export const setRemarkReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.remark = action.payload || "";
  state.validation.remark = !!action.payload;
};

export const setEmailReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.email = action.payload || "";
  state.validation.email = !!action.payload;
};

export const setDrivingLicenseReducer = (
  state: AdType,
  action: PayloadAction<string>
) => {
  state.drivingLicense = action.payload || "";
  state.validation.drivingLicense = !!action.payload;
};

export const setDrivingLicenseValidationReducer = (
  state: AdType,
  action: PayloadAction<boolean>
) => {
  state.validation.drivingLicense = action.payload;
};

export const setValidateStep1Reducer = (
  state: AdType,
  action: PayloadAction<boolean>
) => {
  state.validation.validateStep1 = action.payload;
};

export const setValidateStep2Reducer = (
  state: AdType,
  action: PayloadAction<boolean>
) => {
  state.validation.validateStep2 = action.payload;
};

export const setValidateStep3Reducer = (
  state: AdType,
  action: PayloadAction<boolean>
) => {
  state.validation.validateStep3 = action.payload;
};
