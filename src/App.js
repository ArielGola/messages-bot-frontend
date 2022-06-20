import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>

                    <Route path='/signin' exact />

                    <Route path='/signup' exact />

                    <Route path='/messages' exact />

                    <Route path='/messages/categories' exact />

                    <Route path='/history' exact />

                </Routes>
            </Router>
        </div>
    );
}

export default App;
