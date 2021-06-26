import { FC } from 'react';
import styled from 'styled-components';
import {Font_Size} from "../../../styled_helpers/Font_Size";
import {Colors} from "../../../styled_helpers/Colors";

const Linked = styled.div`
    display:flex;
    flex-direction: column;
`;

const LinkIcon = styled.div`
    margin-top: 1rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    width:25%;
    display:flex;
    img{
        width: 1.7rem;
        height: 2rem;
        margin-left:.7rem;
    }
    span{
        margin-top: .7rem;
        margin-left: 1.1rem;
        font-size: 1.5rem;
    }
    a{
        text-decoration:none;
        color:${Colors.black};
    }
    :hover{
        transform: scale(.9);
    }
`;

const Links: FC = () => {
    return( 
        <Linked>
            <LinkIcon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <a href="/publications"><span>Publications</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <a href="/ecosystem"><span>Ecosystem</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <a href="/entities"><span>Entities</span></a>
            </LinkIcon>
        </Linked>
        
    );
};
export default Links;
