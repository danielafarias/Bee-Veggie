import HeaderBar from "./HeaderBar";
import HeaderLogo from "./HeaderLogo";
import AccessButton from "./AccessButton";
import CartButton from "./CartButton";
import OrderButton from "./OrderButton";
import { 
    Grid,
    Typography
} from '@material-ui/core'

export default function Order() {
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
        title={<Typography variant='h4'>Meu Pedido</Typography>}
        icon1={<OrderButton />}
        icon2={<CartButton />}
      />
        </div>
    );
}