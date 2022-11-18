import { Typography, Box } from '@mui/material'
import React from 'react'
import './Landing.css'

const Landing = () => {


    return (
        <>
            <div id="landing">

            </div>
            <div className="landingContainer">
                <div>
                    <Typography sx={{ color: '#343434', fontWeight: 600 }} variant='h1' >Access Bars</Typography>
                    <Typography sx={{ color: '#646464', fontWeight: 600 }} variant='h1' >Dunakeszi</Typography>
                </div>
                <Box
                    component="img"
                    sx={{ height: '150px', mt: { xs: '130px', sm: '40px' } }}
                    src={require("../../../img/logo.png")}
                ></Box>
            </div>

        </>
    )
}

export default Landing