import styled from 'styled-components';


const AboutUsPage = () => {
    return (
        <Wrap>
            <Heading>
                We are <strong>NeoCirc</strong>
            </Heading>

            <ParagraphWrap width="84%" margin="0% 8%">
            <strong><i>NeoCirc LLC</i></strong> was founded in 2021 by four experienced pediatric urologists practicing around the country. 
            We recognized that there are approximately 25,000 newborn boys who experience complications after circumcision. 
            These complications are likely avoidable by improving education. <strong><i>Our goal</i></strong> is to reduce the complications of neonatal circumcision and 
            the number of neonatal circumcisions requiring repair. <strong><i>Through our web-based educational platform</i></strong>, we aim to standardize circumcision
            methods among specialties performing neonatal circumcision. We also strive to serve as a shared resource, educating parents, doctors, 
            and nurses about the best practices in neonatal circumcision. 
            </ParagraphWrap>
            
            <Heading2>
                Why <strong>NeoCirc</strong> Is Important To Hospitals
            </Heading2>

            <ParagraphWrap width="84%" margin="0% 8%">
            Hospital systems suffer from a 5% incidence of adverse outcomes as they do not now provide consistent practices for neonatal 
            circumcision and after-care.
            Adverse outcomes include unexpected visits for: 
            <ul>
                <li>Outpatient pediatric urologicla visits to remedy hygiene issues.</li>
                <li>Surgical reconstruction in the operating room to repair a failed circumcision at an estimated $15,000 per case.</li>
                <li>Low patient satisfaction scores.</li>
            </ul>
            </ParagraphWrap>

            <Heading2>
                <strong>NeoCirc</strong> Fixes Hospital Systems
            </Heading2>

            <ParagraphWrap width="84%" margin="0% 8%">
            NeoCirc fixes the most common causes of adverse outcomes by providing objective tools across the hospital enterprise which include:
            <ul>
                <li>Assessments to determine which boys are suitable for circumcision.</li>
                <li>Precise marking for the circumcision site.</li>
                <li>Home skincare.</li>
            </ul>
            </ParagraphWrap>
        </Wrap>
    )
};


const Wrap = styled.div`
    background: linear-gradient(to bottom, #99ccff 0%, #ffccff 100%);
    margin: 0px 50px 50px 50px;
    @media (max-width: 768px) {
        margin: 0px;
    }
`;

const ParagraphWrap = styled.span`
    width: ${props => props.width};
    vertical-align: top;
    margin: ${props => props.margin};
    font-size: 25px;
    display: inline-block;
    padding-bottom: 2em;
    word-break: break-word;
`;

const Heading = styled.h1`
    font-weight: lighter;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size:70px;
    text-align: center;
`;

const Heading2 = styled.h1`
    font-weight: lighter;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size:40px;
    text-align: center;
`;

export { AboutUsPage };