import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import { ShoppingCartContextProvider } from './components/ShoppingCartContext';

import { LoadingSpinner } from './components/LoadingSpinner';
import { Navbar } from './components/NavigationBars/Navbar';
import { FooterBar } from './components/FooterBar';
import SideBar from './components/NavigationBars/SideBar';
import { CheckoutPageIndex } from './components/CheckoutPage/CheckoutPageIndex';

const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const SearchPage = React.lazy(() => import('./components/SearchPage/SearchPage'));
const StoreProfilePage = React.lazy(() => import('./components/StoreProfilePage/StoreProfilePageIndex'));
const ShoppingCartPage = React.lazy(() => import('./components/ShoppingCartPage/ShoppingCartPage'));
const ItemPageIndex = React.lazy(() => import('./components/ItemPage/ItemPageIndex'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense
        fallback={
          <div className="spinnerWrapper">
            <LoadingSpinner />
          </div>
        }
      >
        <section id="MainSection">
          <ShoppingCartContextProvider>
            <Navbar />
            <div id="PageContainer">
              <SideBar />
              <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/search" render={() => <SearchPage />} />
                <Route exact path="/shoppingcart" render={() => <ShoppingCartPage />} />
                <Route exact path="/checkout" render={() => <CheckoutPageIndex />} />
                <Route exact path="/:storename" render={() => <StoreProfilePage />} />
                <Route exact path="/:storename/:itemid" render={() => <ItemPageIndex />} />
              </Switch>
            </div>
            <FooterBar />
          </ShoppingCartContextProvider>
        </section>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
