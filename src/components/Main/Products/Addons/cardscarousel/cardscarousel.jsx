import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem  } from '@mantine/core';
import "./cardcarousel.css"

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(500),
    // width:rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

// interface {
//   image: string;
//   title: string;
//   category: string;
// }

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    
    <>
     {/* <h1 id="head">Ready For The New?</h1>  */}
    <Paper
      shadow="md"
      p="xl"
      radius="xl"
      
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
    
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
    </>
  );
}

const data = [
  {
    image:
      './assets/images/new1.png',
    // title: 'Best forests to visit in North America',
    // category: 'nature',
  },
  {
    image:
      './assets/images/new2.png',
    // title: 'Hawaii beaches review: better than you think',
    // category: 'beach',
  },
  {
    image:
      './assets/images/new3.png',
    // title: 'Mountains at night: 12 best locations to enjoy the view',
    // category: 'nature',
  },
  {
    image:
      './assets/images/new4.png',
    // title: 'Aurora in Norway: when to visit for best experience',
    // category: 'nature',
  },
  {
    image:
      './assets/images/new5.png',
    // title: 'Best places to visit this winter',
    // category: 'tourism',
  },
  {
    image:
      './assets/images/new6.png',
    // title: 'Active volcanos reviews: travel at your own risk',
    // category: 'nature',
  },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //   title: 'Active volcanos reviews: travel at your own risk',
  //   category: 'nature',
  // },
  // {
  //   image:
  //     'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //   title: 'Active volcanos reviews: travel at your own risk',
  //   category: 'nature',
  // },
];

 function CardsCarousel() {
  // <h1 id="head">Ready For The New?</h1> 
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
   
    <Carousel
      slideSize="35%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 3}
    >
      {slides}
    </Carousel>
  );
}
export default CardsCarousel