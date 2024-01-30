/**
 * Neural - network | main script
 */

"use strict";

let nn = new NeuralNetwork([2, 1]);
console.log(nn.out([1, 1]));

for (let i = 0; i < 50; i++) {
    nn.mutate(-1, 1)
    console.log(nn.out([1, 1]));
}
