import React from "react";
import { Accordion } from "react-bootstrap";
import styled from 'styled-components';

const ParFAQPage = () => {

    return (
        <Wrap>
            <Heading>
                Parent's FAQ
            </Heading>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question #1</Accordion.Header>
                    <Accordion.Body>
                        Answer
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question #2</Accordion.Header>
                    <Accordion.Body>
                        Answer
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Wrap>
    );
}

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
    height: 100vh;
`;

const Heading = styled.h1`
    font-size: 40px;
    padding-bottom: 20px;
`;

export { ParFAQPage };