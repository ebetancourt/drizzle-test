const world = 'world';

export function hello(who: string = world): string {
    return `Hello ${who}! `;
}

console.log(hello(`Elliot`)); // Hello world!

import { db } from './db';
