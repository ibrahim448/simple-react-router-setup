
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './Layout/Main';
import Friends from './components/Friends/Friends';

function App() {

  const router = createBrowserRouter([

    {path:"/", element: <Main></Main>,

    children: [
      {path:"home", element: <Home></Home>},
      {path:"about", element: <About></About>},
      {path: "friends", element: <Friends></Friends>,
      loader: async ()=> {
        return fetch("https://jsonplaceholder.typicode.com/users")
      }
      }
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
