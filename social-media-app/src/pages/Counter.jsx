import React, { useState } from "react";

function Counter() {
    // useState를 사용하여 카운터의 상태 관리
    const [count, setCount] = useState(0);
    // 카운터를 증가시키는 함수
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
export default Counter;