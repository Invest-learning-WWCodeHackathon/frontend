import { Container } from 'react-bootstrap';
import Hero from './Hero';
import Features from './Features';


function Home() {

    return (
            <Container>
                <Hero/>
                <Features/>
            </Container>
    );
}

export default Home;