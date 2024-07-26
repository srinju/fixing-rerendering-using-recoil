import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom", //unique key for each atom 
    default : 0 //default value of the state 
});

