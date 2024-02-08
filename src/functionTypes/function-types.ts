import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

let indicator: number = 1;

// A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

console.log(add(5, 7))

// Example of the add function above but using arrow function syntax
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()

console.log(addArrow(5, 7))
// Arguments are the actual values that are passed into a function when it is called.

export const functionParamsExample = () => {
    return {
        title: `Data types can be set for function parameters.`,
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function expects as parameters`,
        code: `
        function add(num1: number, num2: number) {
            return (num1 + num2)
        }`
    }
}

export const functionReturnTypesExample = () => {
    return {
        title: `Data types can be set for the return value of a function.`,
        explanation: `When writing functions in TypeScript, you can specify the type of data that the function will return.`,
        code: `
        function add(num1: number, num2: number): number {
            return (num1 + num2)
        }`
    }
}

export const functionArrowExample = () => {
    return {
        title: `Arrow functions can be used to define functions. All of the data typeing of parameters and return values can be done in the same line.`,
        explanation: `Arrow functions are a more concise way to define functions in JavaScript and TypeScript.`,
        code: `
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()`
    }
}

const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');

nextButton.addEventListener('click', () => {
    if (indicator < 3) {
        indicator++;
        loadExample(indicator);
    }
})

prevButton.addEventListener('click', () => {
    if (indicator > 1) {
        indicator--;
        loadExample(indicator);
    }
})

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector("#cardExplanation");
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleNum: number = 1) {
    // based on the exampleNum, load the appropriate example
    let chosenExample
    switch (exampleNum) {
        case 1:
            chosenExample = functionParamsExample();
            break;
        case 2:
            chosenExample = functionReturnTypesExample();
            break;
        case 3:
            chosenExample = functionArrowExample();
            break;
        default:
            chosenExample = functionParamsExample();
    }

    cardTitle.textContent = chosenExample.title;
    cardExplanation.textContent = chosenExample.explanation;
    cardCode.innerHTML = hljs.highlight(chosenExample.code, { language: "typescript" }).value;
}

loadExample(indicator);