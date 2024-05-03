import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import {Box, Button} from '@mui/material'
import { useEffect, useState } from 'react';

import { getItems } from '../services/firebase';
import { addItem } from '../services/firebase';
import { deleteItem } from '../services/firebase';
import { Item } from '../types/Item';

function ShoppingTable() {
    
    const [isAdd, setisAdd] = useState(false)
    const addState = () => setisAdd(true)
    const closeState = () => setisAdd(false)

    const [values, setValues] = useState({
        name: '',
        quantity: 0,
        dateAdded: '',
        expireIn: 0
    })

    const handleValueChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const onSave = async() => {
        await addItem(values, 'shopping')
        window.location.reload()
    }

    const onDelete = async(id: string) => {
        await deleteItem(id, 'shopping')
        window.location.reload()
    }

    // limit 14 rows
    const [rows, setRows] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const items = await getItems('shopping') as Item[]; // Fetch items from Firestore
                setRows(items); // Update rows state with fetched items
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems(); // Call fetchItems when the component mounts
    }, []);

    const AddField = {
        width: '100px',
        textAlign: 'center',
        fontSize: '0.875rem'
    }

    const ButtonHolder = {
        width: '700px',
        textAlign: 'right',
        marginTop: '20px',
    }

    return (
        <>
        <TableContainer component={Paper} sx={{height: '500px'}}>
            <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>No. </TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Quantity</TableCell>
                    </TableRow>
                 </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                    <TableRow key={row.name}>
                        <TableCell align='center'>{index + 1}</TableCell>
                        <TableCell align='center'>{row.name}</TableCell>
                        <TableCell align='center'>{row.quantity}</TableCell>
                        <TableCell align='center'> <DeleteIcon sx={{cursor: 'pointer'}} onClick={async() => onDelete(row.id)}/></TableCell>
                    </TableRow>
                    ))}
                    { isAdd == true ?
                    <TableRow>
                        <TableCell align='center'>{rows.length + 1}</TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='name'
                                value={values.name}
                                onChange={handleValueChange}>
                            </TextField>              
                        </TableCell>

                        <TableCell align='center'>
                            <TextField 
                                id="standard-basic" 
                                variant="standard" 
                                sx={AddField} 
                                name='quantity'
                                value={values.quantity}
                                onChange={handleValueChange}>
                            </TextField>
                        </TableCell>
                    </TableRow>
                    : <></>
                    }      
                </TableBody>
            </Table>
        </TableContainer>
        
        <Box sx={ButtonHolder}>
        {isAdd == false ? 
        <Button variant='contained' onClick={addState}> Add Item</Button> : 
        <>
            <Button variant='contained' sx={{backgroundColor: 'green', marginRight:'10px'}} onClick={async() => {onSave(); closeState()}}>Save</Button>
            <Button variant='contained' sx={{backgroundColor: 'red', marginLeft:'10px'}} onClick={closeState}>Cancel</Button>
        </>
        }
    </Box>
    </>
    )
}


export default ShoppingTable;