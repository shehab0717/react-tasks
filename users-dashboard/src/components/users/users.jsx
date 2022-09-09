import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/users.action";
import Search from "../Search/Search";
import { FormControl, IconButton, Pagination, Paper, NativeSelect, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Delete, Edit } from "@material-ui/icons";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users.usersData);
    const pageNumber = useSelector(({ users }) => users.pageNumber);
    const totalPages = useSelector(({ users }) => users.totalPages);
    const loading = useSelector(({ users }) => users.loading);
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
        console.log(newLimit);
        let prevElementsCount = (pageNumber - 1) * limit;
        let newPage = Math.ceil(prevElementsCount / newLimit);
        dispatch(fetchUsers(newPage, newLimit));
    }
    if (loading)
        return <div>Loading...</div>
    return (
        <div>
            <div className="d-flex flex-row justify-content-between p-4">
                <h2>User management</h2>
                <button className="btn btn-success">+ Add new</button>
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
                                            <IconButton>
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
                        <FormControl size="small">
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