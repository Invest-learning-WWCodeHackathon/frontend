import { Box } from "@chakra-ui/react";
import "@passageidentity/passage-elements/passage-auth";

function Auth() {
    console.log(process.env.REACT_APP_PASSAGE_APP_ID);
    if (!process.env.REACT_APP_PASSAGE_APP_ID) {
        return <div>Error: Missing Passage App ID</div>;
    }

    return (
        <Box padding='4' color='black' h='80vh' mt={8} >
            <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
        </Box>
    );
}

export default Auth;