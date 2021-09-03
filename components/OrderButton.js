import RestaurantIcon from "@material-ui/icons/Restaurant";
import IconButton from "@material-ui/core/IconButton";

export default function OrderButton() {
  return (
    <IconButton href="/order">
      <RestaurantIcon />
    </IconButton>
  );
}
