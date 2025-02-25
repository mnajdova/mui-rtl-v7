import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useChangeTheme } from '../components/ThemeProvider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';	
import ToggleButton from '@mui/material/ToggleButton';	
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';	
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';	
import CardHeader from '@mui/material/CardHeader';	
import CardMedia from '@mui/material/CardMedia';	
import CardContent from '@mui/material/CardContent';	
import CardActions from '@mui/material/CardActions';	
import Collapse from '@mui/material/Collapse';	
import Avatar from '@mui/material/Avatar';	
import IconButton, { IconButtonProps } from '@mui/material/IconButton';	
import Typography from '@mui/material/Typography';	
import { red } from '@mui/material/colors';	
import FavoriteIcon from '@mui/icons-material/Favorite';	
import ShareIcon from '@mui/icons-material/Share';	
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';	
import MoreVertIcon from '@mui/icons-material/MoreVert';	

const t = (a: string) => a;	

const IconToggleButton = styled(ToggleButton)({	
  display: 'flex',	
  justifyContent: 'center',	
  width: '100%',	
  '& > *': {	
    marginRight: '8px',	
  },	
});	

function IconButtonWrapper(props: IconButtonProps & { expand: boolean}) {	
  const { expand, ...other } = props;	
  return <IconButton {...other} />;
}
// @ts-ignore
const ExpandMore = styled(IconButtonWrapper)(({ theme }) => ({	
  marginLeft: 'auto',	
  transition: theme.transitions.create('transform', {	
    duration: theme.transitions.duration.shortest,	
  }),	
  variants: [	
    {	
      // @ts-ignore
      props: ({ expand }) => !expand,	
      style: {	
        transform: 'rotate(0deg)',	
      },	
    },	
    {	
      // @ts-ignore
      props: ({ expand }) => !!expand,	
      style: {	
        transform: 'rotate(180deg)',	
      },	
    },	
  ],	
}));	

function RecipeReviewCard() {	
  const [expanded, setExpanded] = React.useState(false);	

  const handleExpandClick = () => {	
    setExpanded(!expanded);	
  };	

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridColumnGap: '10px'
    }}>
      {Array(1000).fill(0).map((_, idx) => (
        <Card sx={{ maxWidth: 345 }} key={idx}>	
          <CardHeader	
            avatar={	
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">	
                R	
              </Avatar>	
            }	
            action={	
              <IconButton aria-label="settings">	
                <MoreVertIcon />	
              </IconButton>	
            }	
            title="Shrimp and Chorizo Paella"	
            subheader="September 14, 2016"	
          />	
          <CardMedia	
            component="img"	
            height="194"	
            image="https://mui.com/static/images/cards/paella.jpg"	
            alt="Paella dish"	
          />	
          <CardContent>	
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>	
              This impressive paella is a perfect party dish and a fun meal to cook	
              together with your guests. Add 1 cup of frozen peas along with the mussels,	
              if you like.	
            </Typography>	
          </CardContent>	
          <CardActions disableSpacing>	
            <IconButton aria-label="add to favorites">	
              <FavoriteIcon />	
            </IconButton>	
            <IconButton aria-label="share">	
              <ShareIcon />	
            </IconButton>	
            <ExpandMore	
              expand={expanded}	
              onClick={handleExpandClick}	
              aria-expanded={expanded}	
              aria-label="show more"	
            >	
              <ExpandMoreIcon />	
            </ExpandMore>	
          </CardActions>	
          <Collapse in={expanded} timeout="auto" unmountOnExit>	
            <CardContent>	
              <Typography sx={{ marginBottom: 2 }}>Method:</Typography>	
              <Typography sx={{ marginBottom: 2 }}>	
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set	
                aside for 10 minutes.	
              </Typography>	
              <Typography sx={{ marginBottom: 2 }}>	
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over	
                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring	
                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a	
                large plate and set aside, leaving chicken and chorizo in the pan. Add	
                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,	
                stirring often until thickened and fragrant, about 10 minutes. Add	
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.	
              </Typography>	
              <Typography sx={{ marginBottom: 2 }}>	
                Add rice and stir very gently to distribute. Top with artichokes and	
                peppers, and cook without stirring, until most of the liquid is absorbed,	
                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and	
                mussels, tucking them down into the rice, and cook again without	
                stirring, until mussels have opened and rice is just tender, 5 to 7	
                minutes more. (Discard any mussels that don&apos;t open.)	
              </Typography>	
              <Typography>	
                Set aside off of the heat to let rest for 10 minutes, and then serve.	
              </Typography>	
            </CardContent>	
          </Collapse>	
        </Card>	
      ))}
    </Box>
  );	
}	

export default function Home() {
  const upperTheme = useTheme();	
  const changeTheme = useChangeTheme();	

  const handleChangeDirection = (event: any, direction: any) => {	
    if (direction === null) {	
      direction = upperTheme.direction;	
    }	
    changeTheme({ direction });	
  };	
  return (	
    <>	
      <ToggleButtonGroup	
        exclusive	
        value={upperTheme.direction}	
        onChange={handleChangeDirection}	
        aria-labelledby="settings-direction"	
        color="primary"		
      >	
        <IconToggleButton	
          value="ltr"	
          aria-label={"LTR"}	
          data-ga-event-category="settings"	
          data-ga-event-action="ltr"	
        >	
          <FormatTextdirectionLToRIcon fontSize="small" />	
          LTR	
        </IconToggleButton>	
        <IconToggleButton	
          value="rtl"	
          aria-label={"RTL"}	
          data-ga-event-category="settings"	
          data-ga-event-action="rtl"	
        >	
          <FormatTextdirectionRToLIcon fontSize="small" />	
          RTL	
        </IconToggleButton>	
      </ToggleButtonGroup>	
      <RecipeReviewCard />	
    </>	
  );	
}
