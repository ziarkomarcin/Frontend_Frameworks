import { FC } from 'react';
import styled from 'styled-components';
import {FontSize} from "../../../../Styled_helpers/FontSize";
import {Colors} from "../../../../Styled_helpers/Colors";

const Links = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled.div`
    margin-top:10px;
    cursor: pointer;

    :hover{
        transform: scale(0.95);
        span{
        color: ${Colors.lightgrey};
        }
    }

    img{
        width:2rem;
        height:2rem;
        margin-left: 1rem;
    }

    span{
        margin-left: 1rem;
        font-size: ${FontSize[20]};
        color: ${Colors.white};
    }
`;

const LinksTo: FC = () => {
    return( 
        <Links>
            <Link>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <span>Publications</span>
            </Link>

            <Link>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <span>Ecosystem</span>
            </Link>

            <Link>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <span>Entities</span>
            </Link>
        </Links>
    );
};
export default LinksTo;