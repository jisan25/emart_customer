import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const AUTH_USER_STORAGE_KEY = "authToken";

export const authTokenAtom = atomWithStorage(AUTH_USER_STORAGE_KEY, null);
export const loadingAtom = atom(false);

export const userAtom = atom("");
