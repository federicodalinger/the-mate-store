import { useState } from 'react';

import { Button } from "@material-ui/core"
import Stack from '@mui/material/Stack';
import { ItemCountContainer } from './styledComponents';


const ItemCount = ({stock, initial, onAdd}) => {
  
    const [rate, setRate] = useState(initial);  

    const handleClickAdd = () => {
        if(rate<stock && rate>=initial) {
           setRate(rate+1)
        }   
    }

    const handleClickDelete = () => {
        if(rate<=stock && rate>initial) {
            setRate(rate-1)
        } 
    }

    const handleClickSendChart = () => {
        if(rate<=stock && rate>=1) {
           alert("You have added " + rate + " items.")
           onAdd(rate)
        }   
    }


    return ( 
        <div >

            <ItemCountContainer>
                    <Stack direction="column" spacing={1} > 
                        <Stack direction="row" spacing={3}> 
                            <Button variant="contained" size="small" onClick={handleClickDelete}>-</Button>
                            <div>{rate}</div>
                            <Button variant="contained" size="small" onClick={handleClickAdd}>+</Button> 
                        </Stack>

                        {
                            stock && rate
                            ? <Button variant="contained" size="small" onClick={handleClickSendChart}>Add to chart</Button>
                            : <Button variant="contained" disabled size="small">Add to chart</Button>
                        }
                        

                    </Stack>
            </ItemCountContainer>
        </div>
    )
};

export default ItemCount