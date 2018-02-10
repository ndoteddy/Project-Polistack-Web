import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Pages/HomePage';
import EventCreate from './Pages/Event_Create';
import EventList from './Pages/Event_List';
import EventPolibot from './Pages/Event_Polibot';
import { BrowserRouter,Link,Route } from 'react-router-dom';
import Header from "./Component/Header";
import Footer from "./Component/Footer";



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
    <BrowserRouter>
        <BaseLayout />
    </BrowserRouter>
), app);