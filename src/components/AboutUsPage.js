import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import samplePortrait from './component-images/sample-portrait.png';


const AboutUsPage = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                We are <strong>NeoCirc</strong>
            </Heading>

            <ParagraphWrap width="84%" margin="0% 8%">
                Around 5% of boys who are circumcised as newborns experience complications requiring surgical repair.
                Such repairs cause parents unexpected financial and emotional burdens and drain healthcare resources.
                Our goal is to reduce the complications of neonatal circumcision and the number of neonatal circumcisions requiring repair.
                Through our web-based educational platform, we aim to standardize circumcision methods among specialties performing neonatal circumcision,
                and to serve as a shared resource educating parents, doctors, and nurses about the best practices in neonatal circumcision.
                Our product will strive to become a unifying resource in the marketplace for neonatal circumcision to prevent unexpected
                complications and burdens of involving parties.
            </ParagraphWrap>

            <SubHeading>
                Meet Our Team
            </SubHeading>

            <PortraitWrap>

                <SubHeading2 width="95%">
                    NeoCirc inc.
                </SubHeading2>

                <ParagraphWrap width="100%" margin="0% 2.5% 1.5em">
                    Description
                </ParagraphWrap>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Emily Blum</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Emily Blum</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Emily Blum</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <SubHeading2 width="95%">
                    Development Team
                </SubHeading2>

                <ParagraphWrap width="100%" margin="0% 2.5% 1.5em">
                    Description
                </ParagraphWrap>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Valentin Stelea</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Sebastian Wilson</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Khelan Modi</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Masaki Asanuma</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20%', margin: '2.5%', display: 'inline-block' }}>
                    <Card.Img variant="top" src={samplePortrait} />
                    <Card.Body>
                        <Card.Title>Kevin Quayle</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            
             </PortraitWrap>

        </Wrap>
    )
};


const Wrap = styled.div`
    background: linear-gradient(to bottom, #99ccff 0%, #ffccff 100%);

`;

const ParagraphWrap = styled.span`
    width: ${props => props.width};
    vertical-align: top;
    margin: ${props => props.margin};
    font-size: 25px;
    display: inline-block;
    text-align: justify;
`;

const PortraitWrap = styled.div`
    padding-bottom: 200px;
`;

const Heading = styled.h1`
    font-weight: lighter;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size:70px;
    text-align: center;
`;

const SubHeading = styled.h2`
    font-weight: lighter;
    padding-top: 2em;
    padding-bottom: 1em;
    font-size: 60px;
    text-align: center;
`;

const SubHeading2 = styled.h3`
    width: ${props => props.width};
    margin: .2em 2.5%;
    font-weight: bolder;
    padding-top: .5em;
    padding-bottom: 0em;
    font-size: 40px;
    text-align: left;
`;

export { AboutUsPage };