import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'
import audio from './audio/1.mp3';

const SkinTherapy1 = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                For Families Who Choose Circumcision
            </Heading>

            <ParagraphWrap width="92%" margin="4% 4%">
                {"Care of the penile shaft after circumcision is important for proper healing of the circumcision.\n\n" +
                "Please follow the instructions for cleaning and dressing the circumcision site given to you by your provider. \n\n" +
                "In this module, you will learn additional care critical to proper healing of the circumcision."}
            </ParagraphWrap>

            <ReactAudioPlayer
                src={audio}
                style={{margin: '2% 4%', width: '92%'}}
                controls
            />

            <Button
                as={Col}
                variant="dark"
                onClick={() => {
                    // When the user presses this button, navigate them back to the module selection page
                    navigate('/modules');
                }}
                style={{ margin: '0% 0% 4% 4%', height: "40px", width: "46%"}}
            >
                Back
            </Button>
            <Button
                as={Col}
                variant="info"
                onClick={() => {
                    // When the user presses this button, navigate them to the next page in module
                    navigate('/modules/skin_therapy/2');
                }}
                style={{ margin: '0% 4% 4% 0%', height: "40px", width: "46%"}}
            >
                Next
            </Button>
        </Wrap>
    )
};

/*
    For CSS styling, you can style a HTML block (div, h1, Card, whatever)
    easily like this and use it in the code above.
*/
const Wrap = styled.div`
    background: linear-gradient(to bottom, #99ccff 0%, #ffccff 100%);
    margin: 0px 50px 50px 50px;
`;

const ParagraphWrap = styled.span`
    background: white;
    width: ${props => props.width};
    vertical-align: top;
    margin: ${props => props.margin};
    padding: 8%;
    font-size: 30px;
    display: inline-block;
    text-align: justify;
    white-space: pre-line;
`;

const Heading = styled.h1`
    padding-top: 1em;
    font-size:50px;
    text-align: center;
`;

export { SkinTherapy1 };