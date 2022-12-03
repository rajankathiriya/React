import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import reportWebVitals from './reportWebVitals';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Home from './Component/Home';
import Mycounter from './Component/Mycounter';
import Magic from './Component/Magic';
import Mydata from './Component/Mydata';
import Scrollbar from './Component/Scrollbar';
import Mytask from './Component/Pages/Mytask';
import Fetch from './Component/Useeffect/Fetch';
import Task from './Component/Useeffect/Task1';
import Axios from './Component/Useeffect/Axios';
import DataAxios from './Component/Useeffect/Axios';
import Employeedatail from './Component/Form/Employeedatail';
import StudentDetail from './Component/Form/StudentDetail';
import Data from './Component/Test/Data';
import Formtest from './Component/Test/Formtest';
import TestAPI1 from './Component/Test/TestAPI1';
import TestAPI2 from './Component/Test/TestAPI2';
import TestAPI3 from './Component/Test/TestAPI3';
import TestAPI4 from './Component/Test/TestAPI4';
import TestAPI5 from './Component/Test/TestAPI5';
import TestAPI6 from './Component/Test/TestAPI6';
import Formcollage from './Component/Form/Formcollage';
import FormTask from './Component/Form/FormTask';
import Mydataformik from './Component/Form/Myformikform';
import FormikTask from './Component/Form/FormikTask';
import Carformik from './Component/Form/Carformik';
import Formyupvalidation from './Component/Form/Formyupvalidation';
import Simpleprops from './Component/Props/Simpleprops';
import Task1props from './Component/Props/Task1props';
import Item from './Component/Props/Item';
import Task1empmain from './Component/Props/Task1empmain';
import Aggrid1 from './Component/Grid/Aggrid1';
import Aggrid2 from './Component/Grid/Aggrid2';
import ClassApicall from './Component/Class/ClassApicall';
import Loginform from './Component/Apipost/Loginform';
import Registration from './Component/Apipost/Registration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ToastContainer />
    {/* <Mytask /> */}
    {/* <Scrollbar /> */}
    {/* <Mycounter /> */}
    {/* <Magic /> */}
    {/* <Mydata /> */}
    {/* <Employeedatail /> */}
    {/* <StudentDetail /> */}

    {/* ---------------------------------API--------------------------- */}

    {/* <DataAxios /> */}
    {/* <Fetch /> */}
    {/* <Task /> */}

    {/* ---------------------------------test--------------------------- */}
    {/* <Data /> */}
    {/* <Formtest /> */}
    {/* <TestAPI1 /> */}
    {/* <TestAPI2 /> */}
    {/* <TestAPI3 /> */}
    {/* <TestAPI4 /> */}
    {/* <TestAPI5 /> */}
    {/* <TestAPI6 /> */}

    {/* ---------------------------------FORM--------------------------- */}
    {/* <Formcollage /> */}
    {/* <FormTask /> */}

    {/* --------------------------FORMIK-FORM--------------------------- */}
    {/* <Mydataformik /> */}
    {/* <FormikTask />   */}
    {/* <Carformik /> */}
    {/* <Formyupvalidation /> */}

    {/* --------------------------Props--------------------------- */}
    {/* <Simpleprops /> */}
    {/* <Task1props /> */}
    {/* <Item /> */}
    {/* <Task1empmain /> */}

    {/* --------------------------AG-Grid--------------------------- */}
    {/* <Aggrid1 /> */}
    {/* <Aggrid2 /> */}

    {/* --------------------------Class Component--------------------------- */}
    {/* <ClassApicall /> */}

    {/* --------------------------API Post--------------------------- */}

    {/* <Registration /> */}
    {/* <Loginform /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();