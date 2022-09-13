import { useState } from 'react';

import { Button } from "@material-ui/core"
import Stack from '@mui/material/Stack';
import { ItemCountContainer } from './styledComponents';



const ItemCount = ({stock, initial}) => {
  
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

    const handleClickSendChart = () => {
        if(rate<=stock && rate>=1) {
           alert("You have added " + rate + " items.")
        }   
    }


    return ( 
        <div >
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbf2UvsJFqFsA_XdGGQDYhFXVFU77DnwTwwofY6cqv4-EDFQJ-_RpBXKsLt5c7kkBF0A&usqp=CAU" alt="Same alt value">
                
            </img> */}
            <ItemCountContainer>
                {/* <h3>1er Mate Generado en React</h3> */}
                    <Stack direction="column" spacing={1} > 
                        <Stack direction="row" spacing={3}> 
                            <Button variant="contained" size="small" onClick={handleClickDelete}>-</Button>
                            <div>{rate}</div>
                            <Button variant="contained" size="small" onClick={handleClickAdd}>+</Button> 
                        </Stack>

                        <Button variant="contained" size="small" onClick={handleClickSendChart}>Add to chart</Button>
                    </Stack>
            </ItemCountContainer>
        </div>
    )
};

export default ItemCount