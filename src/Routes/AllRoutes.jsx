import {Routes, Route} from 'react-router-dom'



// Local imports 
import Home from '../Pages/Home';
import SingleMovie from '../Pages/SingleMovie';
function AllRoutes(){
    return(
      <Routes>
        <Route path="/movie/:title" element={<SingleMovie/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes> 
    )
}

export default AllRoutes;