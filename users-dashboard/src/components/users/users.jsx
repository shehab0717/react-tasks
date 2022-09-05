import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users.usersData);
    const loading = useSelector(({ users }) => users.loading);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    if (loading)
        return <div>Loading...</div>
    return <ul>
        {users.map((user) => <li key={user.id}>{user.firstName}</li>)}
    </ul>



}