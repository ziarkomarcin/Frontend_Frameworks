import {FC, useState} from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../../styled_helpers/Font_Size";

import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/usersReducers';
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    width:100%;
    height:150px;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
    background-color: ${Colors.pastel};
    #Acc{
        margin: 10px 10px 0 10px;
        font-size: ${Font_Size[20]};
        font-weight: bold;
        text-decoration: underline;
    }
`;
const SeeAcc = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin-top: 5px;
        height:40px;
        width:auto;
        margin-right: 10px;
        border-radius:50px;
    }
    p{
        font-size: ${Font_Size[18]};
        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
    }
    #name, #link{
        margin-left:8px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

const Priv_Set = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Priv,#Set{
        display:flex;
        align-items:center;
        margin-top: 5px;
        margin-left: 15px;
        float: left;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;
            color: ${Colors.black};
            
        }

        :hover{
            transform: scale(0.9);
        }
    }
`;

const Acc: FC = () => {
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

	return (
        
        <Wrapper>
            <p id="Acc">Account</p>
            <SeeAcc>
                <img src={currentUser?.photo.thumbnailUrl} alt='SeeAcc picture' />
                <div id="name">
                    <p>{currentUser?.name}</p>
                </div>
                <div id="link">
                   <p><a href="/profile">See profile</a></p>
                </div>
            </SeeAcc>

            <Priv_Set>
                <div id="Priv">
                <a href="privacy"><img src="./icons/privacy.png"></img>Privacy</a>
                </div>
                <div id="Set">
                <a href="settings"><img src="./icons/settings.png"></img>Settings</a>
                </div>
            </Priv_Set>

        </Wrapper>
	)
}

export default Acc;