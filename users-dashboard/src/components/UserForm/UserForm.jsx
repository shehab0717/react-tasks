import { useDispatch, useSelector } from 'react-redux';
import './UserForm.css';
import {
    RadioGroup, 
    Radio, Modal, 
    TextField, FormControlLabel, FormLabel
} from '@mui/material';
import { hideCreateUserForm } from '../../store/UI/ui.actions';

export default function UserForm() {
    const open = useSelector(({ ui }) => ui.createUser || ui.updateUser)
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

    function close(){
        dispatch(hideCreateUserForm());
    }
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='p-4 m-auto bg-light' style={style}>
                    <form >
                        <h3 className='mb-3'>New user</h3>
                        <TextField className='mb-3' label='Title' variant='outlined' placeholder='mr/ ms/ miss' fullWidth />
                        <TextField className='mb-3 me-3' label='First name' variant='outlined' />
                        <TextField className='mb-3' label='Last name' variant='outlined' />
                        <br />
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <TextField className='mb-3' label='Email' variant='outlined' fullWidth />
                        <TextField className='mb-3' label='Birth date' variant='outlined' fullWidth />
                        <TextField className='mb-3' label='Phone' variant='outlined' fullWidth />
                        <div className='flex flex-row-reverse'>
                            <button className='btn btn-primary ms-4'>Save</button>
                            <button className='btn text-danger' onClick={close}>Cancel</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}