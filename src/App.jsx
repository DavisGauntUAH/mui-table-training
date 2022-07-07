import React from 'react'
import { CssBaseline } from '@mui/material'
import TopBar from './components/TopBar'
import DataTable from './components/DataTable'

const App = () => {
    return(
        <div>
            <CssBaseline />
            <TopBar />
            <main>
                <DataTable />
            </main>
        </div>
    )
}

export default App