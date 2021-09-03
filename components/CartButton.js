import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';

export default function CartButton() {
    return (
       <IconButton href='/cart'>
           <ShoppingCartIcon />
       </IconButton>
    )
}