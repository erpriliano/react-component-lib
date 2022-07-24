import React from "react";
import { TestComponentProps } from "./types";

const TestComponent: React.FC<TestComponentProps> = ({ text }) => {
    return (
        <h1>{text}</h1>
    );
};

export default TestComponent;