import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";
import { DataGrid } from "@mui/x-data-grid";
import Search from "../Search/Search";

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
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'firstName', headerName: 'First Name' },
        { field: 'lastName', headerName: 'Last Name' },
    ];

    return (
        <div>
            <div className="d-flex flex-row justify-content-between p-4">
                <h2>User management</h2>
                <button className="btn btn-success">+ Add new</button>
            </div>
            <Search />
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </div>
        </div>
    )



}