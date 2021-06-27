import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCurrentUser, getUsers} from "./api/usersAPI";

const App: FC = () => {
    const dispatch = useDispatch();

    type GetCurrentUser = ReturnType<typeof getCurrentUser>;
    type GetUsers = ReturnType<typeof getUsers>;

    useEffect(() => {
        dispatch<GetCurrentUser>(getCurrentUser());
        dispatch<GetUsers>(getUsers());
    });

    return(null);
}
export default App;
