import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../Styled_helpers/Colors";
import Slider from './Slider/Slider';
import Box  from './Box/Box';
import { FontSize } from '../../../Styled_helpers/FontSize';

const Wrapper = styled.div`
    width: 1400px;
    height: 1000px;
    margin-left: 60px;
    margin-right: 80px;
    margin-top: 15px;
`;

const BigContainer = styled.div`
    width:100%;
    background-color: ${Colors.grey};
    height: 800px;
    margin-top:15px;
    border-radius: 10px;
    p{
        font-family:'Courier New', monospace;
        color: ${Colors.white};
    }
`;

const WorkspacesSliderTitle = styled.div`
    height: auto;
    width: 100%;
    flex-direction: row; 
    p{
        margin-top: 25px;
        margin-bottom: 25px;
        margin-left: 20px;
        font-weight: bold;
        font-size: ${FontSize[24]};
        font-family:'Courier New', monospace;
        color: ${Colors.white};
    }
`;

const ResumeYourWork = styled(WorkspacesSliderTitle)`
`;

const Content_Box: FC = () => {
    return ( 
        <Wrapper>       
            <Box/>
            <WorkspacesSliderTitle>
                <p>Workspaces</p>
            </WorkspacesSliderTitle>
            <Slider/>
            <ResumeYourWork>
                <p>Resume your work</p>
            </ResumeYourWork>
            <BigContainer>
                <p>BigContainer in Content_Box</p>
            </BigContainer>
        </Wrapper>
    );
};
export default Content_Box;