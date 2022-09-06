import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";
import MaterialTable from "material-table";
import UserRow from "../user-row/UserRow";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users.usersData);
    const pageNumber = useSelector(({ users }) => users.pageNumber)
    const loading = useSelector(({ users }) => users.loading);


    useEffect(
        () => {
            dispatch(fetchUsers());
        },
        []
    );
    if (loading)
        return <div>Loading...</div>

    // const data = [
    //     { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    //     { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
    // ];


    const columns = [
        { title: "ID", field: "id" },
        { title: "Title", field: "title"},
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName"},
    ];

    
    return (
        <>
            <MaterialTable title="Basic Table" columns={columns} data={users} />
            {/* <table className="tabel-fixed border">
                <thead>
                    <tr>
                        <th className="py-1 px-3 border border-black">ID</th>
                        <th className="px-3 border border-black">Title</th>
                        <th className="px-3 border border-black">First name</th>
                        <th className="px-3 border border-black">Last name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <UserRow {...user} />)}
                </tbody>
            </table> */}
        </>

    )



}