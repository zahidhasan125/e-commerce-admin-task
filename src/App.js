import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-gradient-to-tl from-cyan-900 via-sky-900 to-blue-900 min-h-screen'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
