import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { CardGroup, Card, Badge} from 'react-bootstrap';

import {Row} from 'react-bootstrap';



import "./style.css";

// For now, very basic home page with a button that leads to the module selection page
const HomePage = () => {
    // useNavigate hook will be used to programmatically route the user based on their actions
    const navigate = useNavigate();
    return (
        
        <Wrap>     
            <div>
                <h1>
                <strong><center>NeoCirc</center></strong>
                </h1>
                <i><center><h6>An educational platform leveraging e-learning to promote proficiency in medical procedures.</h6></center></i>
                <br></br>
            </div>
            {/* <Button
                as={Col}
                variant="primary"
                onClick={() => {
                    // When this button is clicked, route the user to the module selection page
                    navigate('/modules');
                }}
            >
                Module Selection Page
            </Button> */}
            <CardGroup>
            <Card>
                <Card.Body>
                <center><Card.Title>The NeoCirc Experience</Card.Title></center>
                <Card.Text>
                    We strive to offer the most intimate and personalized experience possible, to do so we need to know more about you.
                    <br></br>
                    <br></br>
                    <center>Which best describes you?</center>
                    <br></br>
                    <center>
                    <Button as={Col}
                        variant="primary"
                        onClick={() => {
                        // When this button is clicked, route the user to the module selection page
                        navigate('/modules');
                    }}
                    >I am a Parent</Button>{' '}
                    <Button as={Col}
                    variant="danger"
                    onClick={() => {
                        // When this button is clicked, route the user to the module selection page
                        navigate('/modules');
                    }}
                    >I am a Doctor</Button>
                    </center>

                </Card.Text>
                </Card.Body>
                
            </Card>
            </CardGroup>
    
            
        </Wrap>
    );
};

const Wrap = styled.div`

`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;


export { HomePage };