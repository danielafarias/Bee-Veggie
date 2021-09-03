import RestaurantIcon from '@material-ui/icons/Restaurant';
import { IconButton } from '@material-ui/core';

export default function OrderButton() {
    return (
       <IconButton href='/order'>
           <RestaurantIcon />
       </IconButton>
    )
}
