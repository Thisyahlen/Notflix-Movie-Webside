import HomeScreen from "./pages/HomeScreen";
import "./App.css";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/moviePage">
            <MoviePage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
