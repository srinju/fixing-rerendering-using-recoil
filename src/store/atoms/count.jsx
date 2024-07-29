import { atom, selector } from "recoil";

export const countAtom = atom({ //this is how we store states in recoil
    key: "countAtom", //unique key for each atom 
    default : 0 //default value of the state 
});

//defining my recoil selector >

 export const evenSelector = selector({
    key : "evenSelector",
    get: ({get}) => {
        const count = get(countAtom); //we are passsing count atom here because the evenselector depends on the count state so we will put the state or atom in this case of those which are dependent 
        return count % 2;
    }
});
