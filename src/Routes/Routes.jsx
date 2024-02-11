import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registar from "../Pages/Registar/Registar";
import ContestDetails from "../Components/ContestDetails/ContestDetails";
import AllContest from "../Pages/AllContest/AllContest";
import ContestList from "../Pages/ContestList/ContestList";
import Booking from "../Pages/Booking/Booking";
import Dashbord from "../Layouts/Dashbord";
import MyBookings from "../Pages/Dashbord/MyBookings/MyBookings";
import ProfileDashbord from "../Pages/Dashbord/PorfileDashbor/ProfileDashbord";
import Users from "../Pages/Dashbord/Users/Users";
import AllBookings from "../Pages/Dashbord/AllBookings/AllBookings";
import PrivateRoute from "./PrivateRoute";
import AdminRout from "./AdminRout";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Dashbord/PaymentHistory/PaymentHistory";
import PayedContests from "../Pages/Dashbord/PayedContests/PayedContests";
import MyPaymenst from "../Pages/Dashbord/MyPaymenst/MyPaymenst";
import CreatorRout from "./CreatorRout";
import AddContest from "../Pages/Dashbord/AddContest/AddContest";
import MyAddedContest from "../Pages/Dashbord/MyAddedContest/MyAddedContest";
import AllCreator from "../Pages/Dashbord/AllCreator/AllCreator";
import TopContest from "../Pages/Home/TopContest/TopContest";
import Analysis from "../Pages/Dashbord/Analysis/Analysis";
import AddsRequset from "../Pages/Adds/AddsRequset/AddsRequset";
import AddPublisht from "../Pages/Adds/AddPublisht/AddPublisht";
import AllAdds from "../Pages/Dashbord/AllAdds/AllAdds";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detail/:contestId',
                element: <ContestDetails></ContestDetails>
            },
            {
                path: '/contestList',
                element: <ContestList></ContestList>
            },
            {
                path: '/topContest',
                element: <TopContest></TopContest>
            },
            {
                path: '/allContest/:categories',
                element: <AllContest></AllContest>
            },
            {
                path: '/booking/:_id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registar',
                element: <Registar></Registar>
            },
            {
                path: '/addsRequest',
                element: <AddsRequset></AddsRequset>
            },
            {
                path: '/addPublish',
                element: <AddPublisht></AddPublisht>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children: [
            // common with dainamic
            {
                path: '/dashbord/dashbordPorfile',
                element: <ProfileDashbord></ProfileDashbord>
            },
            {
                path: '/dashbord/payedContests/:ids',
                element: <AdminRout><PayedContests></PayedContests></AdminRout>
            },




            // admin Routs

            {
                path: '/dashbord/users',
                element: <AdminRout><Users></Users></AdminRout>
            },
            {
                path: '/dashbord/allBookings',
                element: <AdminRout><AllBookings></AllBookings></AdminRout>
            },
            {
                path: '/dashbord/allPayments',
                element: <AdminRout><PaymentHistory></PaymentHistory></AdminRout>
            },
            {
                path: '/dashbord/allCreator',
                element: <AdminRout><AllCreator></AllCreator></AdminRout>
            },
            {
                path: '/dashbord/analysis',
                element: <AdminRout><Analysis></Analysis></AdminRout>
            },
            {
                path: '/dashbord/allAdds',
                element: <AllAdds></AllAdds>
            },



            // creators Rout

            {
                path: '/dashbord/addContest',
                element: <CreatorRout><AddContest></AddContest></CreatorRout>
            },
            {
                path: '/dashbord/myAddedContest',
                element: <CreatorRout><MyAddedContest></MyAddedContest></CreatorRout>
            },
            




            // user routs

            {
                path: '/dashbord/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/dashbord/payment/:_id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            // {
            //     path:
            // },
            {
                path: '/dashbord/myPayment',
                element: <MyPaymenst></MyPaymenst>
            }
        ]
    }
])