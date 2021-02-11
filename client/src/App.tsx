import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "./styles/main.scss"

import { HomePageIndex } from "./components/HomePage/HomePageIndex"
import { FavouritesPageIndex } from './components/FavouritesPage/FavouritesPageIndex'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageIndex} />
          <Route exact path="/favourites" component={FavouritesPageIndex} />      
        </Switch>
    </BrowserRouter>
  );
}

export default App;