import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Library from '../Components/Library'
import Entry from '../Components/Entry'
import Details from '../Components/Details'

const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Library" element={<Library />}>
                <Route path="/Library/:id" element={<Details />} />
            </Route>
            <Route path="/Entry" element={<Entry />} />
            <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default RouteComponent