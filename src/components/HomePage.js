import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { CardGroup, Card } from 'react-bootstrap';
import { isMobile } from '../mobile.js'
import "./style.css";

const HomePage = () => {
    // useNavigate hook will be used to programmatically route the user based on their actions
    const navigate = useNavigate();
    const mob = isMobile();
    return (

        <div className={mob}>
        <Wrap>     
            <Heading>
               <strong>NeoCirc</strong>
            </Heading>
            <SubHeading2 width="95%">       
            <i>An educational platform leveraging e-learning to promote proficiency in medical procedures.</i>
            </SubHeading2>
            <div style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: '105px'
            }}>
            <CardGroup>
            <Card>
                <Card.Body>
                <center><Card.Title>The NeoCirc Experience</Card.Title></center>
                <Card.Text>
                    <br></br>
                    <center>We strive to offer the most intimate and personalized experience possible, to do so we need to know more about you.</center>
                    <br></br>
                    <center><i>Which best describes you?</i></center>
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
                    variant="dark"
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
            </div>    
            </Wrap>
            </div>
    );
};

const Wrap = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Heading = styled.h1`
    font-weight: strong;
    padding-top: 0.3em;
    font-size:60px;
    text-align: center;
`;

const SubHeading2 = styled.h3`
    width: ${props => props.width};
    margin: .2em 2.5%;
    font-weight: light;
    padding-top: .5em;
    padding-bottom: 0em;
    font-size: 21px;
    text-align: center;
`;

export { HomePage };