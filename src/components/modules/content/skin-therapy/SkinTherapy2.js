import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'
import audio from './audio/2.mp3';

const SkinTherapy2 = () => {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Heading>
                For Families Who Choose Circumcision
            </Heading>

            <ParagraphWrap width="92%" margin="4% 4%">
                {"Parents and Caregivers:\n\n" +
                "   Learn simple skin therapy techniques\n\n" +
                "   Prevent common problems with healing\n\n" +
                "   Easy."}
            </ParagraphWrap>

            <ReactAudioPlayer
                src={audio}
                style={{ margin: '2% 4%', width: '92%' }}
                controls
            />

            <Button
                as={Col}
                variant="dark"
                onClick={() => {
                    // When the user presses this button, navigate them back to the module selection page
                    navigate('/modules/skin_therapy/1');
                }}
                style={{ margin: '0% 0% 4% 4%', height: "40px", width: "46%"}}
            >
                Back
            </Button>
            <Button
                as={Col}
                variant="info"
                onClick={() => {
                    // When the user presses this button, navigate them to the next page
                    navigate('/modules/skin_therapy/3');
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
    width: 150%; //bad solution (not scalable), need to fix
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

export { SkinTherapy2 };