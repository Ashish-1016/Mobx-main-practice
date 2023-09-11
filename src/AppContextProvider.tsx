import React from "react";
import RootStore from "./stores/RootStore";

interface IAppContextProviderProps {
  children: React.ReactNode;
  rootStore: RootStore;
}

export const StoreContext = React.createContext<RootStore | null>(null);

class AppContextProvider extends React.Component<IAppContextProviderProps> {
  render(): React.ReactNode {
    if (!this.props.rootStore) {
      throw new Error("Root Store must be used inside a Provider");
    } else {
      return (
        <StoreContext.Provider value={this.props.rootStore}>
          {this.props.children}
        </StoreContext.Provider>
      );
    }
  }
}

export default AppContextProvider;
