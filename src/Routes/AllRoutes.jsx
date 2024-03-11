import {Routes, Route} from 'react-router-dom'



// Local imports 
import Home from '../Pages/Home';
import SingleMovie from '../Pages/SingleMovie';
function AllRoutes(){
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:title" element={<SingleMovie/>}/>
      </Routes> 
    )
}

export default AllRoutes;