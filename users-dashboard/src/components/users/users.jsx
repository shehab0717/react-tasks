import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";
import MaterialTable from "material-table";
import tableIcons from "../../utils/tableIcons";

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

    const columns = [
        { title: "ID", field: "id" },
        { title: "Title", field: "title"},
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName"},
    ];

    
    return (
        <>
            <MaterialTable icons={tableIcons} title="Basic Table" columns={columns} data={users} />
            
        </>

    )



}