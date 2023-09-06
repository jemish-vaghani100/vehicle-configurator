import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';  // Import Material-UI Button
import Stdfeature from './Stdfeature';
import Exterior from './Exterior';
import Interior from './Interior';
import Invoice from './Invoice';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Image from '../component/Image';
import Stack from '@mui/material/Stack';


const Config = () => {
    const model_id = sessionStorage.getItem("model_id");

    const [coreOptions, setcoreOptions] = useState([]);
    const [categoryname, setcategoryname] = useState("standard");
    const [finalcomp, setFinalcomp] = useState([{}]);

    let navigate = useNavigate();

    let UpdateComp = (param) => {
        setFinalcomp(param);
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/componentbyc/" + model_id)
            .then((response) => response.json())
            .then((data) => {
                setcoreOptions(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleStandard = (event) => {
        setcategoryname("standard");
    }

    const handleExterior = (event) => {
        setcategoryname("exterior");
    }

    const handleInterior = (event) => {
        setcategoryname("interior");
    }

    const handleCancel = () => {
        window.history.back();

    }

    const handleConfirm = (event) => {
        //setcategoryname("invoice");
        navigate('/invoice');
    }

    return (
        

        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Topbar />
        <Stack direction="row" spacing={2}>
        <Box sx={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        <div style={{ marginLeft: 20 }}>
            <br /><br />
            <div><h3>Vehicle Core Details </h3></div>
            {
                coreOptions.map(
                    (option) => (
                        <ul style={{ marginBottom: 0 }}><li>{option}</li></ul>
                    ))
            }
            <br/>
            
            <hr />

            <div>
                <b>{categoryname === "standard" ? <Stdfeature UpdateComp={UpdateComp} finalcomp={finalcomp} /> :
                    categoryname === "exterior" ? <Exterior UpdateComp={UpdateComp} finalcomp={finalcomp} /> :
                        <Interior UpdateComp={UpdateComp} finalcomp={finalcomp} /> 
                   }</b>
            </div>
            <br />

            <Button style={{ marginRight: 20, marginLeft: 20 }} variant="contained" onClick={handleStandard}>Standard</Button>
            <Button style={{ marginRight: 20 }} variant="contained" onClick={handleExterior}>Exterior</Button>
            <Button style={{ marginRight: 20 }} variant="contained" onClick={handleInterior}>Interior</Button>
            <Button style={{ marginRight: 20 }} variant="contained" onClick={handleCancel}>Cancel</Button>
            <Button style={{ marginRight: 20 }} variant="contained" onClick={handleConfirm}>Confirm Order</Button>
        </div>
        </Box>
        <Image />
        </Stack>
        <Footer />

        </Box>
        </Box>
        
    

    )
}

export default Config;
