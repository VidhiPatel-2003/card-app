import './App.css';
import Nav from './component/Nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import User from './component/User';
import Error from './component/Error';
import Youtube from './component/Youtube';
import Login from './component/Login';



function App() {

    const router = createBrowserRouter(
        [
            {
                path:"/",
                element:<><Nav/><Home/></>
            },
            {
                 path:"/About",
                 element:<><Nav/><About/></>
            },
            
            {
                path:"/Contact",
                element:<><Nav/><Contact/></>,
                children:[
                    {
                        path:"youtube",
                        element:<><Youtube/></>
                    }
                ]
            },
            {
                path:"/user/:username",
                element:<><Nav/><User/></>
            },{
                path:"/*",
                element:<><Nav/><Error/></>
            },{
                path:"/Login",
                element:<><Nav/><Login/></>
            }
        ]
    )
   
    return (
       <>
        <h1>Explore India's Heritage</h1>
       <RouterProvider router={router}/>
       </>
    );
}

export default App;
