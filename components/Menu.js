import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { getMenu } from "../api/Api";
import Search from './Search';

export default function Menu() {
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
      },
      icon: {
          backgroundColor: '#F8F4F9',
          opacity: 0.7,
          width: '2.5rem',
          height: '2.5rem',
          marginRight: '1rem',
      }
    }));

  const classes = useStyles();

  const [includeValue, setIncludeValue] = React.useState('');


  <Search
    onChange={(e) => setIncludeValue(e.target.value)}
  /> 

  const [menu, setMenu] = React.useState("");

  if (!menu) {
    getMenu().then((res) => setMenu(res));
  }
  const data = Array.from(menu);

const searched = data.filter(v => v.title.includes(includeValue));

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Typography variant='h4'>Menu</Typography>
        </ImageListItem>
        {includeValue == null ? data.map((data) => (
          <ImageListItem key={props.id}>
            <img src={props.imageUrl} alt={props.title} />
            <ImageListItemBar
              title={props.title}
              subtitle={<span>R${props.price}</span>}
              actionIcon={
                <IconButton className={classes.icon} aria-label="Adicionar pedido ao carrinho.">
                  <AddShoppingCartIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        )) :
          searched.map((data) => (
            <ImageListItem key={data._id}>
              <img src={data.imageUrl} alt={data.title} />
              <ImageListItemBar
                title={data.title}
                subtitle={<span>R${data.price}</span>}
                actionIcon={
                  <IconButton className={classes.icon} aria-label="Adicionar pedido ao carrinho.">
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}