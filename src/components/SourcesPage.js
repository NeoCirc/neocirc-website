import React from "react";
import { Card } from 'react-bootstrap';
import styled from 'styled-components';


const SourcesPage = () => {

    return (
        <Wrap>
            <Heading>
                Sources
            </Heading>
            <br/>
            <Card>
                <Card.Body>
                    <center><Card.Title>[1]</Card.Title></center>
                    <Card.Text>
                        <br></br>
                        <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Body>
                    <center><Card.Title>[2]</Card.Title></center>
                    <Card.Text>
                        <br></br>
                        <center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>
                    </Card.Text>
                </Card.Body>

            </Card>
        </Wrap>
    );
}
const Wrap = styled.div`
    padding-left: 40px;
    padding-right: 40px;
`;
const Heading = styled.h1`
    font-weight: strong;
    padding-top: 0.3em;
    font-size:40px;
    text-align: center;
`;
export { SourcesPage };