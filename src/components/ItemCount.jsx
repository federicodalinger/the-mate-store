import { useState } from 'react';

import { Button } from "@material-ui/core"
import Stack from '@mui/material/Stack';


const ItemCount = ({stock, initial, onAdd}) => {
    const [rate, setRate] = useState(initial);  

    const handleClickAdd = () => {
        if(rate<stock && rate>=1) {
           setRate(rate+1)
        }   
    }

    const handleClickDelete = () => {
        if(rate<=stock && rate>1) {
            setRate(rate-1)
        } 
    }

    

    return (
        <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbf2UvsJFqFsA_XdGGQDYhFXVFU77DnwTwwofY6cqv4-EDFQJ-_RpBXKsLt5c7kkBF0A&usqp=CAU" alt="Same alt value">
                
            </img>
            <div>
                <h3>1er Mate Generado en React</h3>
                    <Stack direction="row" spacing={3}> 
                        <Stack direction="row" spacing={3}> 
                            <Button variant="contained" size="small" onClick={handleClickDelete}>-</Button>
                            <div>{rate}</div>
                            <Button variant="contained" size="small" onClick={handleClickAdd}>+</Button> 
                        </Stack>

                        <Button variant="contained" size="small" onClick={onAdd}>Add to chart</Button>
                    </Stack>
            </div>
        </div>
    )
};

export default ItemCount