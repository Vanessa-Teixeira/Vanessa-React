import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Menu from './Componentes/Menu/Menu.jsx';
import Footer from './Componentes/Footer/Footer.jsx';
import Routes from './Router/Router.jsx';
import './App.css';



 class App extends React.Component {
    render(){
        return(
            <>
                <BrowserRouter>
                    <header>
                        <Menu/>
                    </header>
                    <main>
                        <Routes/>
                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </BrowserRouter>
            </>
        );
    }
}

export default App;