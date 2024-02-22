import curriculum from '../data/curriculum.json';

const blocks = curriculum['responsive-web-design'].blocks;

const blocksArray =  Object.values(blocks)

// this is an example of destructuring an array
const [basicCSS, basicHTML, flexbox, grid] = blocksArray;

//console.log(basicCSS);

const navBar = document.querySelector('.navbar');

const buildTopNavFromJSON = (blocksArray: any) => {
    blocksArray.forEach((block: any, index: number) => {
        console.log(block.meta.name)
        const navItem = document.createElement('a');
        navItem.classList.add('btn', 'btn-sm', 'm-4')
        navItem.href = `#${block.meta.name}`;
        navItem.textContent = block.meta.name;
        navBar?.appendChild(navItem);
    })
}

buildTopNavFromJSON(blocksArray);





























/*
A Duck object needs to be able to quack and fly and swim. We can define an interface for the Duck object that specifies the methods that the Duck object should have. We can then use the interface to define the Duck object. This is a simple example of how interfaces can be used to define objects in TypeScript.
*/

interface CanQuack {
    quack: () => void
}

interface CanFly {
    wingSpan: number
    fly(): void
}

interface CanSwim {
    swim(): void
}

// The following is an example of how to define a Duck object using the CanQuack, CanFly, and CanSwim interfaces.  The Duck object must have the methods specified in the interfaces. If the Duck object does not have the methods specified in the interfaces, TypeScript will throw an error. This is an example of 'interface composition' in TypeScript.

class Duck implements CanQuack, CanFly, CanSwim {
    quack() {
        console.log('Quack!')
    }
    wingSpan: number
    fly() {
        console.log('Flap flap flap')
    }
    swim() {
        console.log('Splash splash splash')
    }
}

const duck = new Duck()
duck.quack()
duck.fly()
duck.swim()