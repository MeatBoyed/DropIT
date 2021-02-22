import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/main.scss';

import { ShoppingCartContextProvider } from './components/ShoppingCartContext';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Navbar } from './components/Navbar';
import { SideBar } from './components/SideBar';
const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const ShoppingCartPage = React.lazy(() => import('./components/ShoppingCartPage/ShoppingCartPage'));
const ItemPageIndex = React.lazy(() => import('./components/ItemPage/ItemPageIndex'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));

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
          <Navbar />
          <div id="PageContainer">
            <SideBar />
            <Switch>
              <ShoppingCartContextProvider>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/shoppingcart" render={() => <ShoppingCartPage />} />
                <Route exact path="/:storename/:itemid" render={() => <ItemPageIndex />} />
                <Route exact path="/404" render={() => <PageNotFound />} />
                {/* <Route path="" component={PageNotFound} /> */}
              </ShoppingCartContextProvider>
            </Switch>
          </div>
        </section>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
