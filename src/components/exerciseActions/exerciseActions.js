import styles from './exerciseActions.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import axios from 'axios';


export default function ExerciseActions(){
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        difficulty: '',
        description: ''
    })
    const handleClick = () => {
        setOpen(!open);
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://code-learn-v1.herokuapp.com/api/exercises', formData);
            console.log(response.data);
            console.log('here');
            setOpen(!open);
            window.location.reload();
        } catch(error){
            console.log(error);
        }
    }

    return(
        <section>
            
            <div className={styles.actionButtons}>
                <Button variant="outlined" onClick={handleClick}>
                    Add exercise
                </Button>
            </div>
            
            <Dialog className={styles.modal} open={open} onClose={handleClick}>
            <form className={styles.addExerciseForm} onSubmit={handleSubmit}>
                <DialogTitle>Add a new exercise</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Make sure to fill it with as many details as possible in order for others to better understand and solve your problem.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="normal"
                    id="id"
                    label="Exercise Id"
                    type="number"
                    name='id'
                    fullWidth
                    value={formData.id}
                    onChange={handleChange}
                    variant="standard"
                    placeholder='Give it a nice id...'
                />
                <TextField
                    autoFocus
                    margin="normal"
                    id="name"
                    name='name'
                    label="Exercise name"
                    type="text"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    variant="standard"
                    placeholder='A beautiful name...'
                />
                <Box sx={{ minWidth: 120, marginTop: 3 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="difficulty"
                        label="Difficulty"
                        name='difficulty'
                        value={formData.difficulty}
                        onChange={handleChange}
                        >
                        <MenuItem value='Easy'>Easy</MenuItem>
                        <MenuItem value='Medium'>Medium</MenuItem>
                        <MenuItem value='Intermediate'>Intermediate</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField
                    autoFocus
                    margin="normal"
                    id="id"
                    label="Exercise description"
                    multiline
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    type="number"
                    fullWidth
                    variant="standard"
                    placeholder='Try to be as specific as possible, maybe an example would help?'
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClick}>Cancel</Button>
                    <Button type='submit'>Add</Button>
                </DialogActions>
                </form>
            </Dialog>
            
            
        </section>
    )
}