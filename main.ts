// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician: string[]):void{
    magician.forEach(magician => console.log(magician))
}
let magician:string[]=["Merlin", "Harry Houdini", "David Copperfield", "Penn & Teller"];

show_magicians(magician);

// console.log(magician[0]);
// console.log(magician[1]);
// console.log(magician[2]);
// console.log(magician[3]);
