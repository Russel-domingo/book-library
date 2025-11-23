// function Book (title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//         if(this.read === 'false') {
//             return `${this.title}, ${this.author}, ${this.pages}, not read yet`;
//         } else {
//             return `${this.title}, ${this.author}, ${this.pages}, finish reading`;
//         }
//     }
// }

// const goh = new Book('The god of high school', 'idk', '405', 'false');
// console.log(goh.info());

function Hero(name, level) {
    this.name = name;
    this.level = level;
}
Hero.prototype.great = function () {
    return `${this.name} says hello`;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}
Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
}
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}
Healer.prototype.heal = function () {
    return `${this.name} attacks with the ${this.spell}`;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

const hero1 = new Warrior('Russel', 1, 'axe');
const hero2 = new Healer('Gideon', 1, 'wind');
console.log(hero1);