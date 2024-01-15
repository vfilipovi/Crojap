import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useAdDispatch: DispatchFunction = useDispatch;

export const useAdSelector: TypedUseSelectorHook<RootState> = useSelector;
