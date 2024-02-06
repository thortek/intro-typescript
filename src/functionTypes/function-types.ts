// function type examples coming soon

// A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString()
}

console.log(add(5, 7))

// Example of the add function above but using arrow function syntax
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()

console.log(addArrow(5, 7))
// Arguments are the actual values that are passed into a function when it is called.

export const functionTypesExample = () => {
    return {
        title: "Function Types",
        explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.`,
        code: ` code sample coming soon...`
    }
}

/* export function functionTypesExample() {
    return {
      title: "Function Types",
      explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
              - parameter types
              - return types`,
      code: `// parameter types`,
    }
  } */