import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Cart from './pages/Cart'

 
export const SearchContext = React.createContext()

export default function App() {
    const [searcValue, setSearchValue] = useState('') 

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searcValue,setSearchValue}}> 
                <Header />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    )
}