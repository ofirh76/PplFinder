import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import { usePeopleFetch } from "hooks";
import NavBar from "components/NavBar";

const AppRouter = () => {
  const { users, isLoading, fetchUsersConcat } = usePeopleFetch();

  // const fetchedHome = props => <Home {...props} users={users} isLoading={isLoading} fetchUsersConcat={fetchUsersConcat}/>;
  // const fetchedFavorites = props => <Favorites {...props} isLoading={isLoading}/>;

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><Home users={users} isLoading={isLoading} fetchUsersConcat={fetchUsersConcat}/></Route>
          <Route exact path="/favorites"><Favorites isLoading={isLoading}/></Route>
          {/* <Route exact path="/" component={fetchedHome}/>
          <Route exact path="/favorites" component={fetchedFavorites}/> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
