import Hero from './Hero';
import Features from './Features';
import { Container } from '@chakra-ui/react';


function Home() {

    return (
            <Container maxW={"100%"}>
                <Hero/>
                <Features/>
            </Container>
    );
}

export default Home;