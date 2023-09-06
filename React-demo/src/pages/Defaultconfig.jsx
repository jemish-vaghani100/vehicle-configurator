import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import Navbar from '../component/Navbar';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import Image from '../component/Image';
import Stack from '@mui/material/Stack';

import { CenterFocusStrong } from '@mui/icons-material';

function Defaultconfig() {
    const model_id = sessionStorage.getItem('model_id');
    console.log(model_id);

    const [coreOptions, setcoreOptions] = useState([]);
    const [standardOptions, setstandardOptions] = useState([]);
    const [exteriorOptions, setexteriorOptions] = useState([]);
    const [interiorOptions, setinteriorOptions] = useState([]);
    const [price, setprice] = useState();
    sessionStorage.setItem('price',price);

    let navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/componentbyc/' + model_id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(model_id);
                setcoreOptions(data);
            })
            .catch((error) => console.error('Error fetching data:', error));

        fetch('http://localhost:8080/api/componentbys/' + model_id)
            .then((response) => response.json())
            .then((data) => {
                setstandardOptions(data);
            })
            .catch((error) => console.error('Error fetching data:', error));

        fetch('http://localhost:8080/api/componentbye/' + model_id)
            .then((response) => response.json())
            .then((data) => {
                setexteriorOptions(data);
            })
            .catch((error) => console.error('Error fetching data:', error));

        fetch('http://localhost:8080/api/componentbyi/' + model_id)
            .then((response) => response.json())
            .then((data) => {
                setinteriorOptions(data);
            })
            .catch((error) => console.error('Error fetching data:', error));

        fetch('http://localhost:8080/api/price/' + model_id)
            .then((response) => response.json())
            .then((data) => {
                setprice(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [model_id]);

    const handleConfigure = (event) => {
        navigate('/configure');
    };

   
    const handleInvoice = (event) => {
        navigate('/invoice');
    };

    const handleCancel = () => {
        window.history.back();
    };
   

    return (
        <>


  

        
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <Navbar />

                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Topbar />
                    <Stack direction="row" spacing={2}>
                    <Box sx={{ flex: 1, overflowY: 'auto', padding: '6px' }}>

                        <div style={{ marginLeft: 20 }}>
                            <br /><br />
                            <div><b>Vehicle Core Details</b></div>
                            <List>
                                {coreOptions.map((option, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={option} />
                                    </ListItem>
                                ))}
                            </List>
                            <hr />
                            <div><b>Standard components</b></div>
                            <List>
                                {standardOptions.map((option, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={option} />
                                    </ListItem>
                                ))}
                            </List>
                            <hr />
                            <div><b>Exterior components</b></div>
                            <List>
                                {exteriorOptions.map((option, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={option} />
                                    </ListItem>
                                ))}
                            </List>
                            <hr />
                            <div><b>Interior components</b></div>
                            <List>
                                {interiorOptions.map((option, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={option}  />
                                    </ListItem>
                                ))}
                            </List>
                            <br />
                            <hr />
                            <div><b>Base Price : </b>{price}</div>
                            <div><b>S.T @12% :</b> {price * 0.12}</div>
                            <div><b>TOTAL :</b> {price + price * 0.12}</div><br /><div style={{textAlign:"center"}}>
                            <Button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }}onClick={handleInvoice}>Confirm Order</Button>
                            <Button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={handleConfigure}>Configure</Button>
                            <Button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={handleCancel}>Cancel</Button>
                        </div></div>
                    </Box>
                    <Image />
                    </Stack>
                    <Footer />

                </Box>
            </Box>

            

        
        </>
    );
}

export default Defaultconfig;
