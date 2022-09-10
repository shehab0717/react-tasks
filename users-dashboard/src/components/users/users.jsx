import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, startEditing } from "../../store/users/users.action";
import Search from "../Search/Search";
import { FormControl, IconButton, Pagination, Paper, NativeSelect, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Delete, Edit } from "@material-ui/icons";
import { showCreateUserForm, showUpdateUserForm } from "../../store/UI/ui.actions";


export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users.usersData);
    const pageNumber = useSelector(({ users }) => users.pageNumber);
    const error = useSelector(({ users }) => users.error);
    const errorMessage = useSelector(({ users }) => users.errorMessage);
    const totalPages = useSelector(({ users }) => users.totalPages);
    const loading = useSelector(({ users }) => users.loadingUsers);
    const limit = useSelector(({ users }) => users.limit);


    useEffect(
        () => {
            dispatch(fetchUsers(1, 5));
        },
        []
    );

    function handlePageChange(event, newPage) {
        dispatch(fetchUsers(newPage, limit))
    }

    function changeLimit(event) {
        const newLimit = event.target.value;
        let prevElementsCount = (pageNumber - 1) * limit;
        let newPage = Math.ceil(prevElementsCount / newLimit);
        dispatch(fetchUsers(newPage, newLimit));
    }
    function showCreateForm(){
        dispatch(showCreateUserForm());
    }

    function showEditForm(userId) {
        dispatch(startEditing(userId));
        dispatch(showUpdateUserForm());
    }


    if (loading)
        return <div>Loading...</div>
    if (error)
        return <div>Error!!!! <br /> {errorMessage}</div>
    return (
        <div>
            <div className="d-flex flex-row justify-content-between p-4">
                <h2>Users management</h2>
                <button className="btn btn-success" onClick={()=>{showCreateForm()}}>+ Add new</button>
            </div>
            <Search />
            <div style={{ height: 500, width: '100%' }}>
                <Paper elevation={2}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right" padding="none">Title</TableCell>
                                <TableCell align="right" padding="none">First Name</TableCell>
                                <TableCell align="right" padding="none">Last Name</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map(user =>
                                    <TableRow hover key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell padding="none" align="right">{user.title}</TableCell>
                                        <TableCell padding="none" align="right">{user.firstName}</TableCell>
                                        <TableCell padding="none" align="right">{user.lastName}</TableCell>
                                        <TableCell padding="none" align="right">
                                            <IconButton onClick={(event) => { showEditForm(user.id) }}>
                                                <Edit htmlColor="green" />
                                            </IconButton>
                                            <IconButton>
                                                <Delete htmlColor="darkred" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <Pagination className="py-3 text-center" count={totalPages} page={pageNumber} onChange={handlePageChange} />
                        <FormControl size="small" className="mx-4">
                            <NativeSelect
                                defaultValue={limit}
                                onChange={changeLimit}
                                inputProps={{
                                    name: 'Page limit',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </NativeSelect>

                        </FormControl>
                    </div>
                </Paper>
            </div>
        </div>
    )

}