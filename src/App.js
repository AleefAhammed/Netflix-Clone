import React from "react";
import './App.css' 

import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PostRow from "./Components/Posts/PostRow";
import {Action, Comedy, Horror, Orginals, Romance, Trending} from './Url'

function App() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <PostRow url={Orginals} title='Netflix Orginals'/>
      <PostRow url={Trending} title='Trending' isSmall/>
      <PostRow url={Action} title='Action' isSmall/>
      <PostRow url={Comedy} title='Comedy' isSmall/> 
      <PostRow url={Romance} title='Romance' isSmall/>
      <PostRow url={Horror} title='Horror' isSmall/>
      <Footer/>
      
    </div>
  );
}

export default App;
