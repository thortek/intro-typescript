import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet';

function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}

const monsterArray = ['Frankenstein', 'Dracula', 'Blob', 'Zombie'];
const reversedMonsterArray = reverse(monsterArray);
console.log(reversedMonsterArray);

const numberArray = [23983, 8923498, 20989384, 945982]
const reversedNumberArray = reverse(numberArray);
console.log(reversedNumberArray);

const objectArray = [{name: 'Frankenstein'}, {name: 'Dracula'}, {name: 'Blob'}, {name: 'Zombie'}];
const reversedObjectArray = reverse(objectArray);
console.log(reversedObjectArray);

const booleanArray = [true, true, false, false];
const reversedBooleanArray = reverse(booleanArray);
console.log(reversedBooleanArray);

const detailView = document.querySelector('#detail-view');
const detailViewExample = document.createElement('div');
detailViewExample.classList.add('text-3xl', 'w-full', 'p-4', 'mx-4', 'bg-[#333333DD]')
detailView.appendChild(detailViewExample);

const exampleOne = new ExampleCodeSnippet('Generic Function Example', 
'This is an example of a generic function that reverses an array of any type.',
`function reverse<T>(itemArray: T[]): T[] {
    return itemArray.reverse();
}`);

const exampleTwo = new ExampleCodeSnippet('Generic Classes',
'Generic classes allow you to write code that can be reused with different types of data.',
`class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}`)

const listView = document.querySelector('#list-view');
const exampleOneElement = document.createElement('div');
exampleOneElement.classList.add('text-[.5rem]', 'bg-slate-900', 'p-1', 'm-[2px]', 'rounded', 'overflow-x-auto', 'hover:bg-slate-700', 'hover:cursor-pointer')

exampleOneElement.innerHTML = exampleOne.renderCodeSnippet();
listView.appendChild(exampleOneElement)

exampleOneElement.addEventListener('click', () => {
    detailViewExample.innerHTML = exampleOne.renderCodeSnippet();
})


const exampleTwoElement = document.createElement('div');
exampleTwoElement.classList.add('text-[.5rem]', 'bg-slate-900', 'p-1', 'm-[2px]', 'rounded', 'overflow-x-auto', 'hover:bg-slate-700', 'hover:cursor-pointer')

exampleTwoElement.innerHTML = exampleTwo.renderCodeSnippet();
listView.appendChild(exampleTwoElement)


/* Generics in TypeScript are a tool that allows you to create reusable code components that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

Here's a simple example of a generic function in TypeScript:

function identity<T>(arg: T): T {
    return arg;
}

In this example, T is a type variable—a kind of variable that works on types rather than values. This function will return whatever is sent into it, and the type T will be determined by the caller of the function when they pass an argument. */

/* Generic classes allow you to write code that can be reused with different types of data.

class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

const numberStorage = new DataStorage<number>(10);
const stringStorage = new DataStorage<string>('Hello');
const booleanStorage = new DataStorage<boolean>(true);
const objectStorage = new DataStorage<object>({name: 'Frankenstein'});
const arrayStorage = new DataStorage<number[]>([1, 2, 3, 4, 5]);

*/