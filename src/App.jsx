import React from "react";
import Cart from './components/Cart'
import Add from './components/Add'
import Subtract from './components/Subtract'

export default function App() {


     return (
          <main className="main">
               <div className='eval minus'>
                    <Subtract />
               </div>
               <Cart/>
               <div className='eval plus'>
                    <Add />
               </div>
          </main>
     )
}