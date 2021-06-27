import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styled_helpers/Colors";
import { Font_Size } from '../../../../styled_helpers/Font_Size';
import {IState} from "../../../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from '../../../../reducers/usersReducers';


const Wrapper = styled.div`
    width:100%;
    height:auto;
    background-color: ${Colors.pastel};
    display:flex;
    flex-direction: column;
    padding:1rem;
    font-family: 'Raleway';
    margin-bottom: 1rem;
    .title{
        font-size: 1.75rem;
        margin-bottom:1rem;
        color: ${Colors.eggplant}
    }

    .cluster_Info{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:20px;
    }
    .cluster_Pic{
        border-radius:50%;
    }
    .cluster_Pic, .typeIcon{
        width:25px;
        height:25px;
        margin-left:5px;
        margin-right:5px;
    }
    .text{
        font-size: ${Font_Size[18]};
    }
    h1{
        font-weight:bold;
        font-size: ${Font_Size[24]};
        margin-left: 10px;
        margin-right: 10px;
    }
`;


const Posts =  ({posts, loading} : {posts: any[], loading: boolean}) => 
{   
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
            {posts.map( post => ( 
                <Wrapper key={post.id}>

                    <div className='title'>
                        {post.title}
                    </div>

                    <div className='text'>
                        <p>
                            {post.body}
                        </p>
                    </div>

                    <div className='cluster_Info'>
                        <img className='cluster_Pic' src="./images/sas.jpg"/> 
                        <p className='cluster_Name'>Susbid. corp.</p>
                        <h1>·</h1> 
                        <img className='typeIcon' src="./icons/entities2.png"/> 
                        <p className="Type">Corporate</p>
                        <h1>·</h1>
                        <p className="lastUpdate">Updated 3 days ago by {currentUser?.name}.</p>
                    </div>
                </Wrapper> 
            ))}
        </div>
    )
};

export default Posts;

