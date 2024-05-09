import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner'
//import MainLayout from './components/layout/MainLayout';

const MainLayout = lazy(() => import( './components/layout/MainLayout'));
const Home = lazy(() => import( './pages/home/Home'));

function App() {

  return (
      <Router> 
        <Suspense fallback={<div className="page-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#666"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          /> 
          </div>}>

          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" />}  />          
            </Route>

          </Routes>
      </Suspense>  
    </Router>    
  )
}

export default App
