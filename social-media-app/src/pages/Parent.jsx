import React from "react";

function Parent() {
    return (
        <ChildComponent 
            name = "John Doe"
            age = {25}
        />
    );
}

function ChildComponent({name, age}) {
    return (
        <p>My name is {name} and I am {age} yeares old.</p>
    );
}
export default Parent;