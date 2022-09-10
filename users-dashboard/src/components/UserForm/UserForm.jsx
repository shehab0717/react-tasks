import { useDispatch, useSelector } from 'react-redux';
import './UserForm.css';
import {
    RadioGroup,
    Radio, Modal,
    TextField, FormControlLabel, FormLabel
} from '@mui/material';
import { hideUserForm } from '../../store/UI/ui.actions';
import { useEffect } from 'react';
import { doneEditing, fetchUser } from '../../store/users/users.action';
import { DatePicker } from '@mui/lab';

export default function UserForm() {
    const open = useSelector(({ ui }) => ui.showUserForm)
    const isEdit = useSelector(({ ui }) => ui.editMode);
    const userId = useSelector(({ users }) => users.editUserId);
    const userDetails = useSelector(({ users }) => users.userDetails);

    const dispatch = useDispatch();
    const style = {
        position: 'absolute',
        left: '50%',
        top: '20%',
        transform: 'translate(-50%, -20%)',
        width: 600,
        boxShadow: 24,
        p: 4,
        borderRadius: 10,
    };
    var user = (isEdit && userDetails) ? userDetails : {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        dateOfBirth: '',
    }

    useEffect(() => {
        if (userId) {
            dispatch(fetchUser(userId));
        }
    }, [userId])
    function close() {
        dispatch(doneEditing());
        dispatch(hideUserForm());
    }
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='p-4 m-auto bg-light' style={style}>
                    {
                        (isEdit && !userDetails)
                            ? <div>Loading</div>
                            : <form >
                                <h3 className='mb-3'>New user</h3>
                                <TextField className='mb-3' label='Title' variant='outlined' placeholder='mr/ ms/ miss' fullWidth value={user.title} />
                                <TextField className='mb-3 me-3' label='First name' variant='outlined' value={user.firstName} />
                                <TextField className='mb-3' label='Last name' variant='outlined' value={user.lastName} />
                                <br />
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    value={user.gender}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                                <TextField className='mb-3' label='Email' variant='outlined' fullWidth value={user.email} />
                                <TextField className='mb-3' label='Birth date' variant='outlined' fullWidth
                                    value={new Date(user.dateOfBirth).toLocaleDateString('en-US')}
                                />
                                <TextField className='mb-3' label='Phone' variant='outlined' fullWidth value={user.phone} />
                                <div className='flex flex-row-reverse'>
                                    <button className='btn btn-primary ms-4'>Save</button>
                                    <button className='btn text-danger' onClick={close}>Cancel</button>
                                </div>
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}