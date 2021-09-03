import HeaderBar from "../components/HeaderBar";
import HeaderLogo from "../components/HeaderLogo";
import AccessButton from "../components/AccessButton";
import CartButton from "../components/CartButton";
import OrderButton from "../components/OrderButton";
import { 
    Grid,
    Typography
} from '@material-ui/core'

export default function Cart() {
    return(
        <div>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <AccessButton />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item>
          <HeaderLogo />
        </Grid>
      </Grid>

      <HeaderBar
        title={<Typography variant='h4'>Pedidos</Typography>}
        icon1={<OrderButton />}
        icon2={<CartButton />}
      />
        </div>
    );
}