import { useDispatch, useSelector } from 'react-redux';
import './UserForm.css';
import {
    RadioGroup,
    Radio, Modal,
    TextField, FormControlLabel, FormLabel
} from '@mui/material';
import { hideUserForm } from '../../store/UI/ui.actions';
import { useEffect, useState } from 'react';
import { doneEditing, fetchUser, createUser, updateUser } from '../../store/users/users.action';

export default function UserForm() {
    const open = useSelector(({ ui }) => ui.showUserForm)
    const isEdit = useSelector(({ ui }) => ui.editMode);
    const userId = useSelector(({ users }) => users.editUserId);
    const user = useSelector(({ users }) => users.userDetails);
    const isLoading = useSelector(({ users }) => users.loadingUser);
    const isEditing = useSelector(({ users }) => users.isEditing);

    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


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


    useEffect(() => {
        if (userId) {
            dispatch(fetchUser(userId));
        }
    }, [userId])

    useEffect(() => {
        if (isEdit) {
            setTitle(user.title ?? '');
            setFirstName(user.firstName ?? '');
            setLastName(user.lastName ?? '');
            setGender(user.gender ?? '');
            setDateOfBirth(user.dateOfBirth ?? '');
            setEmail(user.email ?? '');
            setPhone(user.phone ?? '');
        }
    }, [user])

    function close() {
        dispatch(doneEditing());
        dispatch(hideUserForm());
    }

    function btnClick() {
        if (isEdit) {
            dispatch(updateUser({ id: userId, title, firstName, lastName, phone, gender }));
        }
        else {
            dispatch(createUser({ title, firstName, lastName, email, phone, gender }));
        }
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
                        (isEdit && isLoading)
                            ? <div>Loading</div>
                            : <div>
                                <h3 className='mb-3'>{isEdit ? 'Edit user' : 'New User'}</h3>
                                <TextField className='mb-3' label='Title'
                                    variant='outlined' placeholder='mr/ ms/ miss' value={title} fullWidth
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                                <TextField className='mb-3 me-3' label='First name' variant='outlined'
                                    value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                                <TextField className='mb-3' label='Last name' variant='outlined'
                                    value={lastName} onChange={(event) => setLastName(event.target.value)} />
                                <br />
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    value={gender}
                                    name="radio-buttons-group"
                                    onChange={(event) => setGender(event.target.value)}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                                <TextField className='mb-3' label='Email' variant='outlined' fullWidth
                                    value={email} onChange={(event) => setEmail(event.target.value)} />
                                <TextField className='mb-3' label='Birth date' variant='outlined' fullWidth
                                    value={dateOfBirth}
                                    onChange={(event) => setDateOfBirth(event.target.value)}
                                />
                                <TextField className='mb-3' label='Phone' variant='outlined' fullWidth
                                    value={phone} onChange={(event) => setPhone(event.target.value)} />
                                <div className='flex flex-row-reverse'>
                                    <button className='btn btn-primary ms-4' disabled={isEditing} onClick={btnClick}>Save</button>
                                    <button className='btn text-danger' onClick={close}>Cancel</button>
                                </div>
                            </div>

                    }
                </div>
            </Modal>
        </div>
    )
}