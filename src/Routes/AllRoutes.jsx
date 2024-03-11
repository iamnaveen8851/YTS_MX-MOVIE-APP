import {Routes, Route} from 'react-router-dom'



// Local imports 
import Home from '../Pages/Home';
function AllRoutes(){
    return(
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> 
    )
}

export default AllRoutes;