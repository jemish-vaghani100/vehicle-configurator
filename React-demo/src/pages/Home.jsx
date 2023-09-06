import React from 'react'
import Navbar from '../component/Navbar';
import Box from '@mui/material/Box';
import Topbar from '../component/Topbar';
import Footer from '../component/Footer';
import Card from '@mui/material/Card'; // Import the Material-UI Card component here mcard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


function App() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Navbar />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                    
                    <Topbar />

                    <Stack direction="row" spacing={2} sx={{ padding: '20px' }}>
                        <Card sx={{ maxWidth: '50%' }} >
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/imgs/car.webp"
                                title="Small Car"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Small Car
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A small car, also known as a subcompact car or a compact car, is a type of automobile that is smaller in size and typically has seating for four passengers. These cars are known for their fuel efficiency and easy maneuverability, making them well-suited for urban environments. Small cars are often chosen for their affordability and practicality as they offer basic transportation with a focus on compactness and efficient use of space.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: '50%' }}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/imgs/car.webp"
                                title="Sedan"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sedan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A sedan is a type of passenger car with four doors and a separate trunk compartment for cargo. Sedans are known for their classic and elegant design, offering comfortable seating for passengers both in the front and rear. They typically have a roomier interior compared to smaller car types and often prioritize comfort and style. Sedans can range from compact to full-size and are popular choices for families and individuals looking for a well-balanced blend of comfort, space, and practicality.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Stack>

                    <Stack direction="row" spacing={2} sx={{ padding: '20px', pt: 0 }}>
                        <Card sx={{ maxWidth: '50%' }} >
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/imgs/car.webp"
                                title="SUV"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    SUV
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    An SUV is a versatile type of vehicle that combines elements of both passenger cars and off-road vehicles. SUVs are known for their higher ground clearance, larger size, and often come with four-wheel drive or all-wheel drive capabilities. They are popular for their spacious interiors, offering ample seating and cargo space. SUVs are designed to handle a variety of road conditions, making them suitable for urban driving as well as outdoor adventures. They come in various sizes, from compact crossovers to full-size SUVs.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: '50%' }}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/imgs/car.webp"
                                title="Sedan"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Luxury car
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Luxury cars are vehicles that offer a higher level of comfort, performance, and features compared to standard models. They are often equipped with advanced technology, premium materials, and sophisticated design elements. Luxury cars prioritize a smooth and refined driving experience, along with high-quality interiors that provide comfort and convenience. These cars can belong to various segments, including sedans, SUVs, and even sports cars. Luxury cars are typically associated with higher price points and are chosen by individuals who value both performance and exclusivity.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Stack>
                    <Footer />
                </Box>
                
            </Box>
        </>
    )
}

export default App;
