import React from 'react';

import { Article, Brand, Cta, Navbar } from './components';
import {Blog,Header,Possibility,Features,Footer,WhatGpt3} from "./containers"
import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar/>

        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Article/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
