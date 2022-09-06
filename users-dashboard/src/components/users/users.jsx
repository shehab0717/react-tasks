import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";
import UserRow from "../user-row/UserRow";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users.usersData);
    const pageNumber = useSelector(({users})=>users.pageNumber)
    const loading = useSelector(({ users }) => users.loading);


    useEffect(
        () => {
            dispatch(fetchUsers());
        },
        []
    );
    if (loading)
        return <div>Loading...</div>
    return (
        <>
            <table className="tabel-fixed border">
                <thead>
                    <tr>
                        <th className="py-1 px-3 border border-black">ID</th>
                        <th className="px-3 border border-black">Title</th>
                        <th className="px-3 border border-black">First name</th>
                        <th className="px-3 border border-black">Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=><UserRow {...user} />)}
                </tbody>
            </table>
            
            page number: {pageNumber}
        </>
            
    )



}