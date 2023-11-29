import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Privacy from './pages/Privacy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import CookiePolicy from './pages/CookiePolicy';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RajasthanTour from './pages/RajasthanTour';
import KeralaTour from './pages/KeralaTour';
import LadakhTour from './pages/Ladakh_tour';
import MadhyaPradeshTour from './pages/MadhyaPradeshTour';
import KarnatakaTour from './pages/KarnatakaTour';
import JammuandKashmirTour from './pages/JammuandKashmirTour';
import UttarakhandTour from './pages/UttarakhandTour';
import GujaratTour from './pages/GujaratTour';
import TamilNaduTour from './pages/TamilNaduTour';
import SikkimTour from './pages/SikkimTour';
import JaipurTour from './pages/JaipurTour';
import VaranasiTour from './pages/VaranasiTour';
import KathmanduTour from './pages/KathmanduTour';
import ParoTour from './pages/ParoTour';
import MaleTour from './pages/MaleTour ';
import RanthamboreTour from './pages/RanthamboreTour';
import KhajurahoTour from './pages/KhajurahoTour';
import AlleppeyTour from './pages/AlleppeyTour';
import DarjeelingTour from './pages/DarjeelingTour';
import BandhavgarhTour from './pages/BandhavgarhTour';
import OotyTour from './pages/OotyTour';
import LehTour from './pages/LehTour';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Privacy",
    element: <Privacy/>,
  },
  {
    path: "/TermsAndConditions",
    element: <TermsAndConditions/>,
  },
  {
    path: "/CancellationPolicy",
    element: <CancellationPolicy/>,
  },
  {
    path: "/CookiePolicy",
    element: <CookiePolicy/>,
  },
  {
    path: "/Blog",
    element: <Blog/>,
  },
  {
    path: "/Contact-Us",
    element: <Contact/>,
  },
  {
    path: "/RajasthanTour",
    element: <RajasthanTour/>,
  },
  {
    path: "/KeralaTour",
    element: <KeralaTour/>,
  },
  {
    path: "/LadakhTour",
    element: <LadakhTour/>,
  },
  {
    path: "/MadhyaPradeshTour",
    element: <MadhyaPradeshTour/>,
  },
  {
    path: "/KarnatakaTour",
    element: <KarnatakaTour/>,
  },
  {
    path: "/JammuandKashmirTour",
    element: <JammuandKashmirTour/>,
  },
  {
    path: "/UttarakhandTour",
    element: <UttarakhandTour/>,
  },
  {
    path: "/GujaratTour",
    element: <GujaratTour/>,
  },
  {
    path: "/TamilNaduTour",
    element: <TamilNaduTour/>,
  },
  {
    path: "/SikkimTour",
    element: <SikkimTour/>,
  },
  {
    path: "/JaipurTour",
    element: <JaipurTour/>,
  },
  {
    path: "/VaranasiTour",
    element: <VaranasiTour/>,
  },
  {
    path: "/KathmanduTour",
    element: <KathmanduTour/>,
  },
  {
    path: "/ParoTour",
    element: <ParoTour/>,
  },
  {
    path: "/MaleTour",
    element: <MaleTour/>,
  },
  {
    path: "/RanthamboreTour",
    element: <RanthamboreTour/>,
  },
  {
    path: "/KhajurahoTour",
    element: <KhajurahoTour/>,
  },
  {
    path: "/AlleppeyTour",
    element: <AlleppeyTour/>,
  },
  {
    path: "/DarjeelingTour",
    element: <DarjeelingTour/>,
  },
  {
    path: "/BandhavgarhTour",
    element: <BandhavgarhTour/>,
  },
  {
    path: "/OotyTour",
    element: <OotyTour/>,
  },
  {
    path: "/LehTour",
    element: <LehTour/>,
  },
]);

root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


reportWebVitals();
