// // import { useState } from 'react';

import { Button } from "@material-ui/core"
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';


const Item = ({id, thumbnail, title, price}) => {
  
    // // const [rate, setRate] = useState(initial);  

    // // const handleClickAdd = () => {
    // //     if(rate<stock && rate>=1) {
    // //        setRate(rate+1)
    // //     }   
    // // }

    // // const handleClickDelete = () => {
    // //     if(rate<=stock && rate>1) {
    // //         setRate(rate-1)
    // //     } 
    // // }

    // // const handleClickSendChart = () => {
    // //     if(rate<=stock && rate>=1) {
    // //        alert("You have added " + rate + " items.")
    // //     }   
    // // }

    return (
        <div className="">
            <div className="">
                <Stack direction="row" spacing={5}>
                    <div >
                        <img src={thumbnail} alt="" className='imagen_item'/>              
                    </div>
                    <Stack direction="column" spacing={1}>
                        <div>
                            <h4>{title}</h4>
                            <h4>${price}</h4>
                        </div>
                        <div>
                            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}><Button variant="contained" size="small">More info</Button></Link>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default Item;