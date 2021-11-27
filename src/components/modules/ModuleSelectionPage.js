import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { ModuleContent1 } from './content/ModuleContent1';
import { ModuleContent2 } from './content/ModuleContent2';
import { Card } from 'react-bootstrap';
import { BsFillLockFill } from "react-icons/bs";
import { BsUnlockFill } from "react-icons/bs";

const ModuleSelectionPage = () => {
    /*
        Selection state that alternates based on which buttons are clicked
            0 = Module Selection Page
            1 = Module Content Page #1
            2 = Module Content Page #2
    */
    const [selection, setSelection] = useState(0);

    // Headers for corresponding pages based on selection state
    const headers = [
        'Module Selection Page',
        'Content #1',
        'Content #2',
    ];

    return (
        <Wrap>
            {/* Heading text alters based on the selection */}
            <HeadingWrap>
                {headers[selection]}
            </HeadingWrap>

            {/* 
                If selection == 0, display the module selection buttons

                @Valentin, you would have to edit the components below to style it similar to the Figma prototype.
                I'd recommend using something like Cards (https://react-bootstrap.netlify.app/components/cards/) to
                to make the selection pages
            */}
            { selection === 0 && <div>
            <br></br>

            <Card style={{ width: '79rem' }}>
                <Card.Header><BsUnlockFill color="black" size={20}/>  Module 1</Card.Header>
                <Card.Body>
                    <Card.Title>Introduction to NeoCirc</Card.Title>
                    <Card.Text>
                        Learn the basics regarding our organization and how our modules work. 
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            // If Module #1 button is clicked, set the selection variable to 1
                            setSelection(1);
                        }}
                    >   Explore Module
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: '79rem' }}>
                <Card.Header><BsUnlockFill color="black" size={20}/> Module 2</Card.Header>
                <Card.Body>
                    <Card.Title>Benefits of Neonatal Circumcision</Card.Title>
                    <Card.Text>
                        Circumcision is a rather debated field, however in this module we will illustrate the benefits of this medical procedure.
                    </Card.Text>
                    <Button variant="primary"
                        onClick={() => {
                            // If Module #2 button is clicked, set the selection variable to 2
                            setSelection(2);
                        }}
                    >   Explore Module
                    </Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card style={{ width: '79rem' }}>
                <Card.Header><BsFillLockFill color="black" size={20}/>  Module 3</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <center>Complete Module 1 & Module 2 before continuing. </center>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div> }

            {/* If selection == 1, set the page to the module content #1 */}
            { selection === 1 && <ModuleContent1 /> }

            {/* If selection == 2, set the page to the module content #1 */}
            { selection === 2 && <ModuleContent2 /> }

            {/* For both module content pages, display a 'Back' button to allow users to navigate back to selection page */}
            { (selection === 1 || selection === 2) && <Button
                as={Col}
                variant="outline-primary"
                onClick={() => setSelection(0)}
                style={{ marginTop: '20px' }}
            >
                Back
            </Button> }
        </Wrap>
    );
};

const Wrap = styled.div`
    padding: 50px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { ModuleSelectionPage };