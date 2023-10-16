import { Container } from 'react-bootstrap';
import Features from './Features';

import Hero from './Hero';

function Home() {

    return (
            <Container>
                <Hero/>
                <Features/>
            </Container>
    );
}

export default Home;