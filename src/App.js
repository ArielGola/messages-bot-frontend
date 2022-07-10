import {useEffect, useState} from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import MessagesInterface from './components/MessagesComponents/MessagesInterface/MessagesInterface';
import CategoriesInterface from './components/MessagesComponents/CategoriesInterface/CategoriesInterface';
import HistoryInterface from './components/HistoryInterface/HistoryInterface';
import SignIn from './components/UserComponents/SignIn';
import SignUp from './components/UserComponents/SignUp';

import {getToken, initInterceptor} from './helpers/authentication';

import './styles/format.css';


function App() {

    useEffect(() => {

        function comprobeToken() {
            if (getToken()) {
                setLogged(true);
                initInterceptor();
            } else {
                console.log('to signin');
                if (window.location.href !== "/signin") {
                    //window.location.href = "/signin";
                };
            }
        };

        comprobeToken();

    }, []);

    const [logged, setLogged] = useState(false);

    const handleLogged = (value) => {
        setLogged(value);
    };

    return (
        <div className="App">
            <Router>
                {
                    logged ?
                    <Routes>

                        <Route path='/' exact element={<Navigate to='/messages' />} />

                        <Route path='/signin' exact element={<Navigate to='/messages' />} />

                        <Route path='/signup' exact element={<Navigate to='/messages' />} />

                        <Route path='/messages' exact element={<MessagesInterface />} />

                        <Route path='/messages/categories' exact element={<CategoriesInterface />} />

                        <Route path='/history' exact element={<HistoryInterface />} />

                    </Routes>
                    :
                    <Routes>
                        <Route path='/' element={<Navigate to='/signin' />} />

                        <Route path='/messages' exact element={<Navigate to='/signin' />} />

                        <Route path='/messages/categories' exact element={<Navigate to='/signin' />} />

                        <Route path='/history' exact element={<Navigate to='/signin' />} />

                        <Route path='/signin' exact element={<SignIn />} />

                        <Route path='/signup' exact element={<SignUp />} />
                    </Routes>
                }
                
            </Router>
        </div>
    );
}

export default App;
