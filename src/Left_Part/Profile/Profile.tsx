import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styled_helpers/Colors";
import {Font_Size} from "../../../styled_helpers/Font_Size";
import {useSelector} from "react-redux";
import {IUsersReducer} from "../../../reducers/usersReducers";
import {IState} from "../../../reducers";


const Wrapper = styled.div`
    width: 20rem;
    height: 25.5rem;
    background: ${Colors.eggplant};
    display: flex;
    border-radius: 1rem;
    flex-direction: column;
    padding-left: .5rem;
    padding-right: .5rem;
`;

const Basic_View = styled.div`
    width: 100%;
    height: 12.5rem;
    border-radius:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width: 7rem;
        height: 7rem;
        border-radius:50%;
    }
    flex-direction: column;
`;

const FullName = styled.div`
    margin-top:.5rem;
    display:flex;
    color: ${Colors.best_dark};
    font-size: 1.75rem;
    font-weight: bold;
    font-family: 'Raleway';
`;
const Description = styled.div`
    display:flex;
    color: ${Colors.pastel};
    font-size: 1rem;
    font-family: 'Raleway';
    margin-top: 1rem;
`;
const YourButtons = styled.div`
    margin-top: 2rem;
    font-family: Tahoma;
    font-size:${Font_Size[20]};
    display:flex;
    width:100%;
    flex-direction: row;
`;

const Icon = styled.div`
 img{
        width:2rem;
        height:2rem;
        margin-left:.5rem;
    }
    width:25%;
`;

const Desc = styled.div`
    width:65%;
    height:2rem;
    align-items:center;
    display:flex;
    font-size: 1.3rem;

`;
const Button=styled.button`
    width:15%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:1rem;
    outline:none;
    img{
        width:1rem;
        height:1rem;
    }
    :hover{
        cursor: pointer;
        transform: scale(.9);
    }
`;

const Profile: FC = () => {

    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    return( 
            <Wrapper>      
                <Basic_View>
                    <img src={currentUser?.photo.thumbnailUrl} alt='Profile picture' />
                    <FullName>
                        <p>{currentUser?.name}</p>
                    </FullName>
                    <Description>
                        <p>Marcin Ziarko 12552 - WSEI Kraków</p>
                    </Description>
                </Basic_View>        
                
                <YourButtons> 
                    <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                    <Desc>Your Network</Desc>
                    <Button><img src="./icons/network.svg" alt='network'></img></Button>
                </YourButtons>

                <YourButtons>
                        <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                        <Desc>Your Publications</Desc>
                        <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
                </YourButtons>

           </Wrapper> 
    );
};
export default Profile;