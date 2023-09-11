// import React from "react";
// import { RootStore } from "./stores/RootStore";



// export const RootStoreContext = React.createContext(RootStore)


// import React, { useContext } from 'react';
// import  RootStore  from './stores/RootStore';

// // ---------- RootStoreContext ----------
// export const RootStoreContext = React.createContext<RootStore | undefined>(
//     undefined
// );

// // ---------- useRootStore ----------
// export function useRootStore(): RootStore {
//     const rootStore = useContext(RootStoreContext);
//     if (rootStore === undefined) {
//         throw new Error('useRootStore must be used within a RootStoreProvider');
//     }
//     return rootStore;
// }