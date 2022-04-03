import styled from 'styled-components';


const AboutUsPage = () => {
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
    text-align: justify;
    padding-bottom: 5em;
`;

const Heading = styled.h1`
    font-weight: lighter;
    padding-top: 1em;
    padding-bottom: 1em;
    font-size:70px;
    text-align: center;
`;

export { AboutUsPage };