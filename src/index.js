import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/ProductContext';
import { FilterContextProvider } from './context/filterContext';
import { AddToCartProvider } from './context/addCartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppProvider>
        <FilterContextProvider>
            <AddToCartProvider>
                <App />
            </AddToCartProvider>
        </FilterContextProvider>
    </AppProvider>

);

