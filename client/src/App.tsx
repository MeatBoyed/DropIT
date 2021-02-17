import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import { HomePageIndex } from './components/HomePage/HomePageIndex';
import { FavouritesPageIndex } from './components/FavouritesPage/FavouritesPageIndex';
import { ShoppingCartPageIndex } from './components/ShoppingCartPage/ShoppingCartPageIndex';
import { ItemPageIndex } from './components/ItemPage/ItemPageIndex';
import { ShoppingCartContextProvider } from './components/ShoppingCartContext';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ShoppingCartContextProvider>
          <Route exact path="/" component={HomePageIndex} />
          <Route exact path="/favourites" component={FavouritesPageIndex} />
          <Route exact path="/shoppingcart" component={ShoppingCartPageIndex} />
          <Route exact path="/:storename/:itemid" component={ItemPageIndex} />
        </ShoppingCartContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
