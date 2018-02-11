
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Pages/HomePage';
import EventCreate from './Pages/Event_Create';
import EventList from './Pages/Event_List';
import EventPolibot from './Pages/Event_Polibot';
import { BrowserRouter,Link,Route,Routerm,HashRouter } from 'react-router-dom';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../css/one-page-wonder.min.css';
import '../vendor/custom/global.css';
import '../vendor/bootstrap/js/bootstrap.bundle.min.js';



const BaseLayout = () => (

    <div>
        <Header/>
            <div className="base">
                <Route path="/" exact component={HomePage} />
                <Route path="/Event/Create" component={EventCreate} />
                <Route path="/Event/List" component={EventList} />
                <Route path="/Event/Polibot" component={EventPolibot} />

            </div>


        <Footer/>
    </div>
)


const app = document.getElementById('app');
ReactDOM.render((
    <HashRouter>

        <BaseLayout />
    </HashRouter>
), app);