import React from 'react'
import { CssBaseline } from '@mui/material'
import { Outlet } from "react-router-dom";
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'

const Home = () => {

    return(
        <div>
            <CssBaseline />
            <TopBar />
            <SideBar />
            <Outlet/>
        </div>
    )
}

export default Home