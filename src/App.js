import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './components/Modal/Modal';
import './App.css';

const App = () => {
    return (
            <div className="App">
                <MuiThemeProvider>
                    <Modal title="Структура номеров"/>
                </MuiThemeProvider>
            </div>
    );
};

export default App;
