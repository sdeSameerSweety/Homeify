import {
    createStyles,
    Image,
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    rem,
  } from '@mantine/core';
  import image from "./error.jpg"
  import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
  const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: rem(80),
      paddingBottom: rem(80),
    },
  
    title: {
      fontWeight: 900,
      fontSize: rem(34),
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(32),
      },
    },
  
    control: {
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  
    mobileImage: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    desktopImage: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  export function ErrorPage() {
    const { classes } = useStyles();
  
    return (
      <>
      <Navbar/>
      <Container className={classes.root}>
        <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
          <Image src={image.src} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text color="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Link to ="/"><Button variant="outline" size="md" mt="xl" className={classes.control}>
              Get back to home page
            </Button>
            </Link>
          </div>
          <Image src={image} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
      </>
    );
  }