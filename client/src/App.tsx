import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import { ShoppingCartContextProvider } from './components/ShoppingCartContext';
const HomePageIndex = React.lazy(() => import('./components/HomePage/HomePageIndex'));
const FavouritesPageIndex = React.lazy(() => import('./components/FavouritesPage/FavouritesPageIndex'));
const ShoppingCartPageIndex = React.lazy(() => import('./components/ShoppingCartPage/ShoppingCartPageIndex'));
const ItemPageIndex = React.lazy(() => import('./components/ItemPage/ItemPageIndex'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <ShoppingCartContextProvider>
            <Route exact path="/" component={HomePageIndex} />
            <Route exact path="/favourites" component={FavouritesPageIndex} />
            <Route exact path="/shoppingcart" component={ShoppingCartPageIndex} />
            <Route exact path="/:storename/:itemid" component={ItemPageIndex} />
          </ShoppingCartContextProvider>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
