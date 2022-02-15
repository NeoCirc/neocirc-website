import { Form, Col, Row, Image, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Module2QuizPage = () => {
    const navigate = useNavigate();

    // useLocation hook will be used to retrieve the current path of the page.
    // useLocation can also be used to retrieve data from the path.
    const location = useLocation();
    return (
        <Wrap>
            <HeadingWrap>
                Module 2 Quiz Page
            </HeadingWrap>
            <Form>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            <Col>
                                <Form.Label>Q1.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec diam urna?</Form.Label>
                            </Col>
                            <Col>
                                <Image
                                    src="https://ca-times.brightspotcdn.com/dims4/default/5010365/2147483647/strip/true/crop/600x405+0+0/resize/840x567!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fba%2F6f%2F86f3134a8c819e0925a7df13e153%2Fla-xpm-photo-2013-aug-22-la-sci-sn-circumcision-us-rates-cdc-20130822"
                                    fluid
                                    style={{
                                        maxWidth: '750px',
                                    }}
                                />
                            </Col>
                            <Col>
                                <Form.Check
                                    type="radio"
                                    label="answer 1"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    defaultChecked
                                />
                                <Form.Check
                                    type="radio"
                                    label="answer 2"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="answer 3"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="answer 4"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                />
                            </Col>
                        </Col>
                    </Form.Group>
                </fieldset>
            </Form>
            <Button
                as={Col}
                variant="success"
                onClick={() => {
                    /*
                        Since we have content1 and content2 routes but with the same quiz result page,
                        we can take the path of the current route (either '/modules/content1/quiz' or '/modules/content2/quiz')
                        and add on '/result' to get the desirable path.
                    */
                    navigate(location.pathname + '/result');
                }}
                style={{ marginTop: '20px', height: "40px", width: "50%" }}
            >
                Submit Quiz
            </Button>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin: 0px 50px 50px 50px;
`;

const HeadingWrap = styled.h1`
    padding-bottom: 10px;
`;

export { Module2QuizPage };