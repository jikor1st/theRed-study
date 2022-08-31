/** 함수 표현력 */

function myFunction1() {
  // ...
  arguments.length;
}

myFunction1(1, 2, 3);

function myFunction2(...args) {
  args.length; // 1
}

function myFunction3(a = false, b = 2, ...args) {}

function myFunction4(a = false, { auto, async = false }) {}

/** 객체 표현력 */

for (var attName in sourceObj) {
  targetObject[attName] = sourceObj[attName];
}

x = targetObject = Object.assign({}, sourceObj, targetObject);

x = { ...sourceObj, ...targetObject };

t = targetArr.concat(sourceArray);

t = [...targetArr, ...sourceArray];

/** 클래스 표현력 */

function Person() {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const person = new Person("지땡땡");

person.getName();

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

/** 비동기 표현력 */
asyncTask(function (error, response) {});

function Task() {
  return new Promise((resolve, reject) => {
    //
    resolve("data");
  });
}

const p = Task();

p.then((data) => {
  return Promise;
}).then(() => {});

async function task() {
  try {
    const resp = await Task();

    console.log(resp);
  } catch (e) {
    console.error(e);
  }
}

task();
