import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";
import Acc from "./Acc/Acc";


const Wrapper = styled.div`
    width:315px;
    height:600px;
    border:1px solid gray;

    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';

    #filter{
        width:100%;
        height: auto;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius:5px;
        height: 35px;
        width: 80%;
        font-family: 'Raleway';
        font-size: ${Font_Size[18]};
        outline:none;
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        }
    }
`;

const InnerWrapper = styled.div`
    width:97.5%;
    height:auto;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway';
    overflow-y: scroll;
    margin-left:8px;
    a{
        margin-top: 5px;
        margin-bottom: 5px;
        text-decoration: none;
        color: ${Colors.best_dark};

        :hover{
            transform: scale(0.9);
        }
    }
`;

const Element = styled.div`
    width:95%;
    height: 40px;
    margin-left: 5px;
    margin-top: 5px;
    display:flex;
    justify-content:start;
    align-items:center;
    font-size: ${Font_Size[18]};
    img{
        height: 30px;
        width: 30px;
        margin-right: 15px;
    }
    span{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: ${Font_Size[20]};
        font-weight: bold;
        text-decoration: underline;
    }
`;

const Toggle_Menu: FC = () => {

    const [txt, setInputText] = useState<string>('');
    
    const entered = (e: ChangeEvent<HTMLInputElement>) => {
        const abc = e.target.value;
        setInputText(abc);
    }

	return (
        <Wrapper>
            <div id="filter">
                <input type="abc" value={txt} onChange={entered} placeholder="Filter..." />
            </div>
            <InnerWrapper>
                <Element><span>Platform</span></Element>
                {
                    'Home'.toLowerCase().includes(txt.toLowerCase()) && <Element ><a href="/"><img src='./icons/house2.png'/>Home</a></Element>
                }
                {
                    'Publication'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="publication"><img src='./icons/publications.png'/>Publication</a></Element>
                }
                {
                    'People'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="people"><img src='./icons/people.png'/>People</a></Element>
                }
                {
                    'Entities'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="entities"><img src='./icons/entities2.png'/>Entities</a></Element>
                }
                {
                    'Administration'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="administration"><img src='./icons/administration.png'/>Administration</a></Element>
                }
                <Element><span>Workspaces</span></Element>
                {
                    'Client contract'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="client_contract"><img src='./icons/entities2.png'/>Client contract</a></Element>
                }
                {
                    'Supplier contract'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="supplier_contract"><img src='./icons/entities2.png'/>Supplier contract</a></Element>
                }
                {
                    'Corporate'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="corporate"><img src='./icons/entities.png'/>Corporate</a></Element>
                }
                {
                    'Group norms'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="group_norms"><img src='./icons/people.png'/>Group norms</a> </Element>
                }
                {
                    'Real estate contracts'.toLowerCase().includes(txt.toLowerCase()) && <Element><a href="real_estate_contracts"><img src='./icons/entities.png'/>Real estate contracts</a></Element>
                }
            </InnerWrapper>
            <Acc/>
        </Wrapper>
	)
}
export default Toggle_Menu;