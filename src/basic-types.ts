export function basicTypesExample() {
  return {
    title: "Basic Types",
    explanation: `TypeScript adds several data types on top of JavaScript's data types:
        - boolean
        - number
        - string
        - array
        - tuple
        - enum
        - any
        - void
        - null and undefined
        - never
        - object `,
    code: `
// boolean
    let isDone: boolean = false; // "is assigned the value of"
// isDone is a variable annotated with the boolean data type and assigned the value false.

// number
    let myNumber: number = 42;
// myNumber is a variable annotated with the number data type and assigned the value 42.

// string
    let myName: string = "Thor";
// myName is a variable annotated with the string data type and assigned the value "Thor".
`,
  }
}

export function arrayTypesExample() {
  return {
    title: "Array Types",
    explanation: `TypeScript adds a few different types for arrays, including: array, tuple, and enum.`,
    code: `
    // Array
    let myArray: number[] = [1, 2, 3, 4, 5];
    let myStringArray: string[] = ["Hello", "World"];

    // Tuple
    let myTuple: [string, number] = ["Hello", 42];
    // Tuples are fixed-length arrays where each element has a specific data type
    // In TypeScript, you can specify any number of elements in a tuple, but the data types of each element must match the data types specified in the tuple declaration.

    // Enum
    enum Color {Red, Green, Blue};
    // Enums are a way of giving more friendly names to sets of numeric values.
    `
  }
}

export function functionTypesExample() {
  return {
    title: "Function Types",
    explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
            - parameter types
            - return types`,
    code: `// parameter types`,
  }
}

// example of function type with parameter types

function add(x: number, y: number): number {
    return x + y;
}

let myArray: number[] = [1, 2, 3, 4, 5];
let myStringArray: string[] = ["Hello", "World"];

enum Color {Red, Island_Teal, Bahama_Green, Quartz}

const sportsCar = {
    make: "Porsche",
    model: "911",
    year: 2019,
    color: Color.Bahama_Green
}