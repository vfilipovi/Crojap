import { createSlice } from "@reduxjs/toolkit";
import {
  setAdNameReducer,
  setApplyDeadlineReducer,
  setCategoryReducer,
  setCompanyNameReducer,
  setConditionsReducer,
  setDateOfAdPublishReducer,
  setDrivingLicenseReducer,
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
  setYearsOfExperienceReducer,
} from "./ad-reducers";

export type AdType = {
  id: string;
  companyName: string;
  adName: string;
  category: string;
  applyDeadline: Date | null;
  dateOfAdPublish: Date | null;
  shortDescription: string;
  longDescription: string;
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
    category: boolean;
    applyDeadline: boolean;
    dateOfAdPublish: boolean;
    shortDescription: boolean;
    longDescription: boolean;
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
  applyDeadline: new Date(), // inace ide null, a na string ""
  dateOfAdPublish: new Date(),
  shortDescription: "kratki opis",
  longDescription: "dugi opis",
  category: "",
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
    educationLevel: false,
    yearsOfExperience: false,
    languages: false,
    employmentType: false,
    drivingLicense: false,
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
    setCategory: setCategoryReducer,
    setApplyDeadline: setApplyDeadlineReducer,
    setDateOfAdPublish: setDateOfAdPublishReducer,
    setShortDescription: setShortDescriptionReducer,
    setLongDescription: setLongDescriptionReducer,
    setEducationLevel: setEducationLevelReducer,
    setYearsOfExperience: setYearsOfExperienceReducer,
    setLanguages: setLanguagesReducer,
    setEmploymentType: setEmploymentTypeReducer,
    setDrivingLicense: setDrivingLicenseReducer,
    setSalary: setSalaryReducer,
    setConditions: setConditionsReducer,
    setRequiredSkills: setRequiredSkillsReducer,
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
  setCategory,
  setApplyDeadline,
  setDateOfAdPublish,
  setShortDescription,
  setLongDescription,
  setEducationLevel,
  setYearsOfExperience,
  setLanguages,
  setEmploymentType,
  setDrivingLicense,
  setSalary,
  setConditions,
  setRequiredSkills,
  setRemark,
  setEmail,
  setValidateStep1,
  setValidateStep2,
  setValidateStep3,
} = adSlice.actions;
