// 'use strict';

// const user = {
//     username: "Victor",
//     showName() {
//           // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//       console.log(this.username);
//     },
//   };

//   user.showName();


// _________________________________________________________________________________________

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях 
// звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»" 

// УМОВА:

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// РЕФАКТОРІНГ через this

// Для того щоб правильно використовувати this у методах об'єкта pizzaPalace, 
// потрібно звертатися до властивостей та методів об'єкта через this. 
// Ось оновлений код:

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// Пояснення:
// Метод checkPizza:
// this.pizzas.includes(pizzaName) — звертаємось до властивості pizzas об'єкта pizzaPalace через this.

// Метод order:
// this.checkPizza(pizzaName) — викликаємо метод checkPizza об'єкта pizzaPalace через this.

// Приклади викликів:

// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"
// Тепер код працює коректно, і всі звернення до властивостей та методів об'єкта виконуються через this.
// _________________________________________________________________________________________
// глобальний контекст

// function foo() {
//     console.log(this);
//   }

//   foo(); // window


// _________________________________________________________________________________________

// Контекст методу об'єкта

//   const user = {
//     username: "Poly",
//     showThis() {
//       console.log(this);
//     }
//   };

//   user.showThis(); // {username: "Poly", showThis: ƒ}


// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті 
// showThis(); // "this in showThis: undefined"


// _________________________________________________________________________________________
// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"



// Створили об'єкт user з властивістю username
// Об'єкту user методу showContext присвоїли значення функції showThis. З
// верни увагу, що це не виклик — немає ()
// Тепер викликаємо метод showContext, у якому знаходиться посилання на функцію
//  showThis, тобто ми викликаємо функцію в контексті об'єкта. this вказуватиме на поточний об'єкт, у якому здійснюється виклик


// Цей приклад ілюструє, що контекст виконання функції (this) визначається в 
// момент її виклику, а не в момент оголошення.

// _________________________________________________________________________________________

// тут я не зрозумів, де this ...

// "use strict";

// const book = {
// 	updateAuthor(newAuthor) {
// 		// ...
// 	}
// };

// book.updateAuthor("Jacob");
// console.log ("book.this");


// _________________________________________________________________________________________
// Розглянемо приклад: давай створимо функцію greet, яка вітає різних користувачів готелю, 
// кожен з яких представлений об'єктом з властивостями username і room. Функція приймає один
//  параметр, str — рядок привітання.

// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//   }
  
//   const mango = {
//     username: "Mango",
//       room: 27
//   };
  
//   const poly = {
//     username: "Poly",
//       room: 191
//   };
  
// // За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало
// // на потрібний об'єкт і використовувало значення його властивостей.

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"


// _________________________________________________________________________________________

// Прочитай приклад коду

// function showName() {
	// console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// Як правильно за допомогою методу call викликати функцію showName в контексті об’єкта user?

// user.call(showName)
//  showName.call(user)  // це правильна відповідь Виведе: Alice
// call(showName, user)
// showName().call(user)


// _________________________________________________________________________________________

// Прочитай приклад коду



// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice"
// };

// greet.call(context, "Bob");

// // Яким буде результат, якщо викликати код вище?

// "Hello, Bob! I am John"
// "Hello, Bob! I am Bob"
// "Hello, Bob! I am Alice"
// TypeError: Cannot read property 'person' of undefined


// Результат виклику коду буде:

// "Hello, Bob! I am Alice"

// Пояснення:
// Функція greet приймає аргумент name і використовує this.person для виведення повідомлення.

// Метод call викликає функцію greet і передає їй:

// Перший аргумент (context) — це об'єкт, який стає контекстом (this) всередині функції.

// Другий аргумент ("Bob") — це значення для параметра name.

// У об'єкті context властивість person має значення "Alice", тому this.person всередині функції greet буде дорівнювати "Alice".

// Аргумент name отримує значення "Bob".

// Отже, результат виведення буде:

// Copy
// "Hello, Bob! I am Alice"

// _________________________________________________________________________________________

//Метод apply()

// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//   }
  
//   const mango = {
//     username: "Mango",
//       room: 27
//   };
  
//   const poly = {
//     username: "Poly",
//       room: 191
//   };
  
//   greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
//   greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// _________________________________________________________________________________________
//bind
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця
// нова функція може бути викликана пізніше з будь-якими аргументами


// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме 
// правильний контекст і може використовувати властивість username об'єкта customer.

// _________________________________________________________________________________________

// function sayHello(greeting) {
//     console.log(`${greeting}, ${this.name}!`);
//   }
  
//   const user = {
//     name: "Alice"
//   };
  
//   const greet = sayHello.bind(user);
  
//   greet("Hello");
  

//   Який результат буде в тебе, якщо викликати код вище?

// "this, Alice!" 
// "Hello, Alice!" - це вірна відповідь
// "Hello, this!"

// _________________________________________________________________________________________
// Метод bind() і колбеки
// const customer = {
//     firstName: "Jacob",
//     lastName: "Mercer",
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   function makeMessage(callback) {
//       const username = callback();
//       console.log(`Processing an application from ${username}`);
//   }
  
//   makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// _________________________________________________________________________________________
// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// Що буде виведено в консоль під час виконання коду вище?

// 1923
// 724  - Це вірна відповідь  
// undefined
// TypeError: Cannot read properties of undefined (reading 'books')


// Функція logBookCount викликається через метод bind, який прив'язує контекст до об'єкта { books: 724 }
// . Після того, як функція showBooks викликається, вона викликає метод logBookCount з контекстом 
// { books: 724 }, і тому виводиться значення властивості books цього контексту, тобто 724.


// _________________________________________________________________________________________

// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount);

// Що буде виведено в консоль під час виконання коду вище?

// 1923
// window
// undefined
// TypeError: Cannot read properties of undefined (reading 'books')  - це вірна відповідь

// Дуже добре! Функція showBooks викликається з аргументом library.logBookCount, 
// який є методом об'єкта library. Коли в тілі showBooks викликається callback(), 
// тобто метод logBookCount без прив’язаного контексту, то значенням this у суворому 
// режимі буде undefined. Відповідно спроба знайти на ньому властивість books викличе помилку.

// _________________________________________________________________________________________


// Прочитай приклад коду



// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount);

// Як потрібно змінити останній рядок коду, щоб зберегти контекст під час передачі колбека?

// library.logBookCount.bind(library)
// showBooks(logBookCount.bind(library))
// showBooks(library.logBookCount.bind(library))
// bind(library, showBooks, logBookCount)

// Щоб зберегти контекст під час передачі колбека, потрібно використовувати метод bind для прив'язки контексту до функції logBookCount. Правильний варіант зміни останнього рядка коду буде таким:

// javascript
// Copy
// showBooks(library.logBookCount.bind(library));
// Це означає, що ви передаєте в showBooks не просто функцію logBookCount, а функцію, яка вже має прив'язаний контекст library. Таким чином, коли callback буде викликано всередині showBooks, this всередині logBookCount буде вказувати на library, і код працюватиме коректно.

// Отже, правильна відповідь:

// javascript
// Copy
// showBooks(library.logBookCount.bind(library));

// Точнісінько так! Код showBooks(library.logBookCount.bind(library)) 
// використовує метод bind для прив'язки контексту library до функції logBookCount 
// перед передачею її в якості колбека функції showBooks. Таким чином, контекст буде 
// збережений і функція logBookCount буде викликана з правильним контекстом і виведе значення
//  властивості books об'єкта library.
// _________________________________________________________________________________________
// Стрілочні функції
// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//   showThis(); // this in showThis: window

  


// _________________________________________________________________________________________
// Навіть якщо присвоїти посилання на стрілочну функцію у властивість об'єкта і викликати її в 
// контексті цього об'єкта, this усе одно буде посилатися на об'єкт, який функція запам'ятала
// в момент її оголошення.

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//   const user = {
//     username: "Mango",
//   };
  
//   user.showContext = showThis;
  
//   user.showContext(); // this in showThis: window
  
// _________________________________________________________________________________________

// Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці 
// завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call,
//  apply і bind не впливають на значення this у стрілках.

// _________________________________________________________________________________________

const a = () => {
	console.log(this);
};

function b() {
	a();
}

b.call({ user: "Mango" });

// Що буде виведено на консоль в результаті виконання коду вище?

// undefined  - це правильна відповідь
// window
// об’єкт { user: "Mango" }
// помилка
