import {FC, useEffect,useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {getUsers} from "../../../api/usersAPI";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInformations from "./ProfilePanelInformations/ProfileInformations";
import ProfileProposals from "./ProfileProposals/ProfileProposals";
import ProfileInternalReviews from "./ProfileInternalReviews/ProfileInternalReviews";
import ProfileAmountOfFees from "./ProfileAmountOfFees/ProfileAmountOfFees";
import ProfileAdditionalInfo from "./ProfileHeader/ProfileAdditionalInfo";
import { Colors } from "../../../styled_helpers/Colors";


const Wrapper = styled.div`
    background-color: ${Colors.white};
    border-radius: 20px;
`; 

const Profilepage: FC = () => {
    const dispatch = useDispatch();

    type GetUsers = ReturnType<typeof getUsers>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    });

    const [editMode, setEditMode] = useState(false);


    return (
        <Wrapper>
            <ProfileHeader editMode={editMode} setEditMode={setEditMode}/>
            <ProfileAdditionalInfo/>
            <ProfileInformations editMode={editMode}/>
            <ProfileProposals editMode={editMode}/>
            <ProfileInternalReviews editMode={editMode}/>
            <ProfileAmountOfFees editMode={editMode}/>
        </Wrapper>
    );
}

export default Profilepage;
