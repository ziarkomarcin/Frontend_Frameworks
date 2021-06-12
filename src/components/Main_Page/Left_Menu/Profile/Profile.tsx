import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../Styled_helpers/Colors";
import {FontSize} from "../../../../Styled_helpers/FontSize";

const Wrapper = styled.div`
    width: 304px;
    height: 330px;
    background: ${Colors.grey};
    display: flex;
    border-radius:2%;
    flex-direction: column;
`;

const Profile_Box = styled.div`
    width:300px;
    height:220px;
    border-radius:2%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100px;
        height:100px;
        border-radius:50%;
    }
    flex-direction: column;
`;

const Name = styled.div`
    margin-top:1rem;
    display:flex;
    color: ${Colors.dark};
    font-size: ${FontSize[24]};
    font-weight:bold;
    font-family: 'Courier New', monospace;
`;

const Info = styled.div`
    display:flex;
    color: ${Colors.dark};
    font-size: ${FontSize[18]};
    font-family: 'Courier New', monospace;
    margin-top:2rem;
    margin-bottom: 2rem;
`;

const ProfileButtons = styled.div`
    font-size:${FontSize[20]};
    display:flex;
    flex-direction: row;
    width: 100%;
`;

const Icon = styled.div`
 img{
        width:2rem;
        height:2rem;
        margin-left:10px;
    }
    width:25%;
`;

const Image = styled.div`
 img{
        width:5rem;
        height:auto;
        margin-top:7.5rem;
        border: 1px solid black;
        cursor: pointer;
    }
`;

const Description = styled.div`
    width: 10rem;
    height: 2.5rem;
    align-items: center;
`;
const Button = styled.button`
    width: 3.5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    outline:none;
    img{
        width:auto;
        height:auto;
    }
    :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
`;

const Profile: FC = () => {
    return( 
            <Wrapper>      
                <Profile_Box>
                <Image><img src="./logo192.png" alt='logo'/></Image>
                    <Name>
                        <p>Marcin Ziarko</p>
                    </Name>
                    <Info>
                        <p>WSEI Kraków - 12552</p>
                    </Info>
                    <ProfileButtons> 
                    <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                    <Description>Your Network</Description>
                    <Button><img src="./icons/network.svg" alt='network'></img></Button>
                </ProfileButtons>

                <ProfileButtons>
                        <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                        <Description>Your Publications</Description>
                        <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
                </ProfileButtons>
                </Profile_Box>
           </Wrapper> 
    );
};
export default Profile;