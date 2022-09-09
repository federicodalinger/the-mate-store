import { useEffect, useState } from 'react';

import { Button } from "@material-ui/core"
import Stack from '@mui/material/Stack';



const Item = ({thumbnail, description, start, stock, initial}) => {
  
    const [rate, setRate] = useState(initial);  

    const [isValid, setIsValid] = useState(false);

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


    //componentDidUpdate
    useEffect(() => {
        console.log("Se actualizaron los items")
    }, [rate, isValid]);

    return (
        <Stack direction="row" spacing={5}>
            <div>
                <img src={thumbnail} alt="" class="imagen_item"/>
            </div>
            <Stack direction="column" spacing={1}>
            <div>
                <h4>Description: {description}</h4>
            </div>
            <div>
                     <Stack direction="column" spacing={2}> 
                         <Stack direction="row" spacing={2}> 
                             <Button variant="contained" size="small" onClick={handleClickDelete}>-</Button>
                             <div>{rate}</div>
                             <Button variant="contained" size="small" onClick={handleClickAdd}>+</Button> 
                         </Stack>

                         <Button variant="contained" size="small" onClick={handleClickSendChart}>Add to chart</Button>
                     </Stack>
             </div>
             </Stack>
        </Stack>
    );
}

export default Item;