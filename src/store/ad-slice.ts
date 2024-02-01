import { createSlice } from "@reduxjs/toolkit";
import {
  setAdNameReducer,
  setApplyDeadlineReducer,
  setCategoryReducer,
  setCompanyNameReducer,
  setConditionsReducer,
  setCountyReducer,
  setDateOfAdPublishReducer,
  setDrivingLicenseReducer,
  setDrivingLicenseValidationReducer,
  setEducationLevelReducer,
  setEmailReducer,
  setEmploymentTypeReducer,
  setLanguagesReducer,
  setLongDescriptionReducer,
  setRemarkReducer,
  setRequiredSkillsReducer,
  setSalaryReducer,
  setShortDescriptionReducer,
  setValidateStep1Reducer,
  setValidateStep2Reducer,
  setValidateStep3Reducer,
  setWhatEmployerOffersReducer,
  setYearsOfExperienceReducer,
} from "./ad-reducers";

export type AdType = {
  id: string;
  companyName: string;
  adName: string;
  applyDeadline: string | null;
  dateOfAdPublish: string | null;
  shortDescription: string;
  longDescription: string;
  category: string;
  county: string;
  educationLevel: string;
  yearsOfExperience: number | null;
  languages: string | null;
  employmentType: string | null;
  drivingLicense: string;
  salary: string;
  conditions: string;
  requiredSkills: string;
  whatEmployerOffers: string;
  remark: string;
  email: string;
  validation: {
    id: boolean;
    companyName: boolean;
    adName: boolean;
    applyDeadline: boolean;
    dateOfAdPublish: boolean;
    shortDescription: boolean;
    longDescription: boolean;
    category: boolean;
    county: boolean;
    educationLevel: boolean;
    yearsOfExperience: boolean;
    languages: boolean;
    employmentType: boolean;
    drivingLicense: boolean;
    salary: boolean;
    conditions: boolean;
    requiredSkills: boolean;
    whatEmployerOffers: boolean;
    remark: boolean;
    email: boolean;
    validateStep1: boolean;
    validateStep2: boolean;
    validateStep3: boolean;
  };
};

const initialState: AdType = {
  id: "",
  companyName: "Company d.o.o.",
  adName: "Prodavač M/Ž",
  applyDeadline: null, // inace ide null, a na string ""
  dateOfAdPublish: null,
  shortDescription: "kratki opis",
  longDescription: "dugi opis",
  category: "",
  county: "",
  educationLevel: "",
  yearsOfExperience: null,
  languages: null,
  employmentType: null,
  drivingLicense: "",
  salary: "",
  conditions: "",
  requiredSkills: "",
  whatEmployerOffers: "",
  remark: "",
  email: "",
  validation: {
    id: true,
    companyName: true,
    adName: true,
    applyDeadline: true,
    dateOfAdPublish: true,
    shortDescription: true,
    longDescription: true, //osim id, svi idu na false default
    category: false,
    county: false,
    educationLevel: false,
    yearsOfExperience: false,
    languages: false,
    employmentType: false,
    drivingLicense: true,
    salary: true,
    conditions: false,
    requiredSkills: false,
    whatEmployerOffers: true, // validation true as they are not required
    remark: true,
    email: false,
    validateStep1: false,
    validateStep2: false,
    validateStep3: false,
  },
};

export const adSlice = createSlice({
  name: "ad-edit",
  initialState: initialState,
  reducers: {
    setCompanyName: setCompanyNameReducer,
    setAdName: setAdNameReducer,
    setApplyDeadline: setApplyDeadlineReducer,
    setDateOfAdPublish: setDateOfAdPublishReducer,
    setShortDescription: setShortDescriptionReducer,
    setLongDescription: setLongDescriptionReducer,
    setCategory: setCategoryReducer,
    setCounty: setCountyReducer,
    setEducationLevel: setEducationLevelReducer,
    setYearsOfExperience: setYearsOfExperienceReducer,
    setLanguages: setLanguagesReducer,
    setEmploymentType: setEmploymentTypeReducer,
    setSalary: setSalaryReducer,
    setConditions: setConditionsReducer,
    setWhatEmployerOffers: setWhatEmployerOffersReducer,
    setRequiredSkills: setRequiredSkillsReducer,
    setDrivingLicense: setDrivingLicenseReducer,
    setDrivingLicenseValidation: setDrivingLicenseValidationReducer,
    setRemark: setRemarkReducer,
    setEmail: setEmailReducer,

    // Enables validation to be visible on that step
    setValidateStep1: setValidateStep1Reducer,
    setValidateStep2: setValidateStep2Reducer,
    setValidateStep3: setValidateStep3Reducer,
  },
});

export const {
  setCompanyName,
  setAdName,
  setApplyDeadline,
  setDateOfAdPublish,
  setShortDescription,
  setLongDescription,
  setCategory,
  setCounty,
  setEducationLevel,
  setYearsOfExperience,
  setLanguages,
  setEmploymentType,
  setSalary,
  setConditions,
  setRequiredSkills,
  setWhatEmployerOffers,
  setRemark,
  setEmail,
  setDrivingLicense,
  setDrivingLicenseValidation,
  setValidateStep1,
  setValidateStep2,
  setValidateStep3,
} = adSlice.actions;
