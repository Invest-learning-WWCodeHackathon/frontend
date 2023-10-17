import { Container } from 'react-bootstrap';
import { useCurrentUser } from '../hooks/useCurrectUser';
import SidebarWithHeader from './DashboardHeader';

function Dashboard() {
    const { isLoading, isAuthorized, username } = useCurrentUser();

    if (isLoading) {
        return null;
    }
    const authorizedBody =
        <>
            {/* You successfully signed in with Passage. */}
            {/* <br /><br /> */}
            {/* Your email is: <b>{username}</b> */}
            <Container>
                <SidebarWithHeader />
            </Container>
        </>

    const unauthorizedBody =
        <>
            You have not logged in and cannot view the dashboard.
            <br /><br />
            <a href="/">Login to continue.</a>
        </>
    return (
        <div>
            <div >{!isAuthorized ? '' : 'Unauthorized'}</div>
            <div >
                {!isAuthorized ? authorizedBody : unauthorizedBody}
            </div>
        </div>
    );

}

export default Dashboard;