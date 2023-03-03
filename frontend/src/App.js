import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { LoginUsers } from './components/login/loginForm';
import { SignupUsers } from './components/signup/signupUsers';
import { RootLayout } from './layouts/rootLayout';
import { Home } from './pages/home/home';
import { NotFound } from './pages/home/notFound';


const router=createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route  index element={<Home/>}/>
      <Route path='signup' element={<SignupUsers/>}/>
      <Route path='login' element={<LoginUsers/>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
