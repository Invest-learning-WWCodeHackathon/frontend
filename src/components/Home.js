import { Container } from 'react-bootstrap';

import Header from './Header';
import Hero from './Hero';

function Home() {

    return (
        <div className="">
            <Container>
                <Header />
                <Hero />
            </Container>

        </div>
    );
}

export default Home;