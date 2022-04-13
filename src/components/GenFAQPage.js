import React from "react";
import { Accordion } from "react-bootstrap";
import styled from 'styled-components';

const GenFAQPage = () => {

    return (
        <Wrap>
            <Heading>
                General FAQ
            </Heading>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b><i>What percentage of boys experience complications following newborn circumcision?</i></b></Accordion.Header>
                    <Accordion.Body>
                    Around 5% of boys who are circumcised as newborns experience complications requiring surgical repair.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b><i>What are the consequences of newborn circumcision complications?</i></b></Accordion.Header>
                    <Accordion.Body>
                    Complications from newborn circumcision can put unnecessary financial and emotional stress on a family. Additionally, boys may require anesthesia to correct certain types of complications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b><i>Who is NeoCirc for?</i></b></Accordion.Header>
                    <Accordion.Body>
                    We have multiple modules targeting different stages of care for the newborn boy both before, during, and after circumcision. There are modules intended for the healthcare providers as well as the parents.
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

export { GenFAQPage };