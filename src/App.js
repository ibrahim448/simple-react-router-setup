
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([

    {path:"/", element: <Main></Main>,

    children: [
      {path:"home", element: <Home></Home>},
      {path:"about", element: <About></About>},
    ]
    },
    
    {path:"contact", element: <Contact></Contact>}

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
