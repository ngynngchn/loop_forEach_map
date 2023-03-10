/* Aufgabenstellung


Verwende die Variable checkNumber und map(). Wenn sich die Zahl durch 3 teilen lässt, dann soll zu ihr 100 addiert werden.

Verwende den Code aus dem Kommentarbereich.
Verwende ein if Statement, um zu überprüfen, ob die Zahl durch 3 teilbar ist.
Wenn ja, addiere 100 zu dieser Zahl hinzu.
Gib das Resultat in der Konsole aus.


 */

let checkNumber = [
	18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
	74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

// let test = checkNumber.map((item) => {
// 	if (item % 3 === 0) {
// 		return item + 100;
// 	} else {
// 		return item;
// 	}
// });

let test = checkNumber.map((item) => (item % 3 === 0 ? item + 100 : item));

console.log("test: ", test);
