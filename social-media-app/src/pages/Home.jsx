import React from "react";

function Home({name}) {
    return (
        <div>
            <h1>Profile</h1>
            <p>
                Welcome! {name}
            </p>
        </div>
    );
}
export default Home;