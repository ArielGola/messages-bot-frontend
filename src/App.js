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
            }
        };

        comprobeToken();

    }, []);

    let CompKey;

    const [logged, setLogged] = useState(false);

    const handleLogged = (value) => {
        setLogged(value);
    };

    const refreshFunction = () =>  {
        console.log("Change key");
        CompKey = Math.floor(Math.random()*1000);
        console.log(CompKey);
    };

    return (
        <div className="App">
            <Router>
                {
                    logged ?
                    <Routes>

                        <Route path='/' element={<Navigate to='/messages' />} />

                        <Route path='/signin' exact element={<Navigate to='/messages' />} />

                        <Route path='/signup' exact element={<Navigate to='/messages' />} />

                        <Route path='/messages' exact element={
                            <MessagesInterface 
                                key={CompKey}
                                refreshF={refreshFunction} 
                            />
                        } />

                        <Route path='/messages/categories' exact element={
                            <CategoriesInterface 
                                refreshF={refreshFunction} 
                                key={CompKey} 
                            />
                        } />

                        <Route path='/history' exact element={<HistoryInterface />} />

                    </Routes>
                    :
                    <Routes>
                        <Route path='/' exact element={<Navigate to='/signin' />} />

                        <Route path='/messages' exact element={<Navigate to='/signin' />} />

                        <Route path='/messages/categories' exact element={<Navigate to='/signin' />} />

                        <Route path='/history' exact element={<Navigate to='/signin' />} />

                        <Route path='/signin' handleLogged={handleLogged} exact element={<SignIn />} />

                        <Route path='/signup' handleLogged={handleLogged} exact element={<SignUp />} />
                    </Routes>
                }
                
            </Router>
        </div>
    );
}

export default App;
