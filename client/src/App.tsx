import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import { ShoppingCartContextProvider } from './components/ShoppingCartContext';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Navbar } from './components/Navbar';
const HomePageIndex = React.lazy(() => import('./components/HomePage/HomePageIndex'));
const ShoppingCartPageIndex = React.lazy(() => import('./components/ShoppingCartPage/ShoppingCartPageIndex'));
const ItemPageIndex = React.lazy(() => import('./components/ItemPage/ItemPageIndex'));

const PageNotFound = () => (
  <div className="PagenotFound">
    <h1>Sorry but the page is no there</h1>
    <h3>Error 404</h3>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <ShoppingCartContextProvider>
            <Route exact path="/" component={HomePageIndex} />
            <Route exact path="/shoppingcart" component={ShoppingCartPageIndex} />
            <Route exact path="/:storename/:itemid" component={ItemPageIndex} />
            <Route exact path="/404" component={PageNotFound} />
            {/* <Route path="" component={PageNotFound} /> */}
          </ShoppingCartContextProvider>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
