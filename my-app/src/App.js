import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/SideBar';
import NavBar from './components/NavBar';
import TopBar from "./components/TopBar";
import ContentRow from "./components/ContentRow";
import ContentRow2 from "./components/ContentRow2";
import Title from "./components/Title";
import DataBase from "./components/DataBase";
import Prueba from './components/Prueba';

function App() {
  return (
    <>
      <div id="wrapper"> 
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <NavBar />
              <ContentRow />
              <ContentRow2/>
              <Title />
              <DataBase />
              <Prueba />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
    </>
  );
}


export default App;