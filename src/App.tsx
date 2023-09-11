import { Component } from "react";
import { observer } from "mobx-react";
import { initRouter } from "./routerConfig/initRouter";
import { RouterContext, RouterView } from "mobx-state-router";
import { viewMap } from "./routerConfig/viewMap";

import AppContextProvider from "./AppContextProvider";

class App extends Component {
  rootStore = initRouter()
 
  render() {
    return (
      <AppContextProvider rootStore={this.rootStore}>
        <RouterContext.Provider value={this.rootStore.routerStore}>
          <RouterView viewMap={viewMap} />
        </RouterContext.Provider>
      </AppContextProvider>
    );
  }
}
export default observer(App);











// const rootStore = initRouter()

// function App(){

//   return(
//       <RootStoreContext.Provider value={rootStore}>
//         <RouterContext.Provider value={rootStore.routerStore}>
//           <RouterView viewMap={viewMap} />
//         </RouterContext.Provider>
//       </RootStoreContext.Provider>
//   )
// }

// export default observer(App)
