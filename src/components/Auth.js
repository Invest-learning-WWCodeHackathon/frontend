import "@passageidentity/passage-elements/passage-auth";

function Auth() {
    console.log(process.env.REACT_APP_PASSAGE_APP_ID);
    if (!process.env.REACT_APP_PASSAGE_APP_ID) {
        return <div>Error: Missing Passage App ID</div>;
    }

    return (
        <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
    );
}

export default Auth;