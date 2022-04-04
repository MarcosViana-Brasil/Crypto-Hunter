import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

import Header from './components/Header'
import HomePage from './Pages/HomePage'
import CoinPage from './Pages/CoinPage'
import './App.css'

const useStyles = makeStyles(() => ({
    App: {
        backgroundColor: '#14161a',
        color: 'white',
        minHeight: '100vh',
    },
}))

function App() {
    const classes = useStyles()

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/coins/:id" element={<CoinPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
