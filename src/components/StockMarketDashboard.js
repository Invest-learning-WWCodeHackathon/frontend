import  useCurrentUser from '../hooks/useCurrectUser';
import SidebarWithHeader from './DashboardHeader';

import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    CSSReset,
    Stack,
    Container,
    Link,
    Button
  } from "@chakra-ui/react";

function Dashboard() {
    const { isLoading, isAuthorized } = useCurrentUser();

    if (isLoading) {
        return null;
    }
    const authorizedBody =
        <>
            <SidebarWithHeader />
        </>

    const unauthorizedBody =
        <>
            <ChakraProvider>
                <CSSReset />
                <Box p={3} m={5} pt={5} height={'80vh'}>
                    <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'} >
                    <Heading m={5}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'blue.400',
                            zIndex: -1,
                        }} >
                        Dough Dynasty
                        </Text>
                        <br />
                    </Heading>
                    <Text p={5} m={5} mt={14} color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg' }}>
                        Please log in to access the dashboard.
                    </Text>
                    <Link href={"/sign-up"}>
                        <Button colorScheme={"blue"} size={"sm"}>
                            Sign in to continue
                        </Button>
                    </Link>
                    </Stack>
                </Box>
            </ChakraProvider>
            <br /><br />
        </>
    return (
        <div>
            <div >
                {isAuthorized ? authorizedBody : unauthorizedBody}
            </div>
        </div>
    );

}

export default Dashboard;