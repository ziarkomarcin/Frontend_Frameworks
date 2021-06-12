import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../Styled_helpers/Colors";
import { FontSize } from '../../../../Styled_helpers/FontSize';


const Wrapper = styled.div`
    background-color: ${Colors.white};
    width: 100%;
    height: 420px;
    border-radius: 10px;
    flex-direction: row;
`;

const LeftWrapper = styled.div`
    width:30%;
    height: 100%;
    background-color: ${Colors.grey};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    padding-left:12px;
    float:left;
    p{
        font-family:'Courier New', monospace;
        color: ${Colors.white};
    }
    #Title{
        color: ${Colors.white};
        font-size: ${FontSize[22]};
        padding-bottom:10px;
    }
    #date-profile{
        display:flex;
        flex-direction:row;
        padding-bottom:20px;
        align-items:center;
        #date{
            font-size: ${FontSize[18]};
            margin-right: 10px;
        }
        #main-pic{
            border-radius:50%;
            width:40px;
            height:40px;
            background-color:white;
        }
        #profile-name{
            font-size: ${FontSize[18]};
            margin-left:10px;
        }
    }
`;

const RightWrapper = styled.div`
    width:69.14%;
    height: 100%;
    background-color: #c2c2d6;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    display:flex;
    float:left;
`;

const Box: FC = () => {
    return ( 
        <Wrapper>
            <LeftWrapper>
            <p id="Title"><p>LeftWrapper - Box</p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit ...</p>
            <div id="date-profile">
                <p id="date">7 jan. 2020</p> 
                <image id="main-pic"></image>
                <p id="profile-name">John Doe</p>
            </div>
            </LeftWrapper>
            <RightWrapper>

            </RightWrapper>
        </Wrapper>
    );
};

export default Box;