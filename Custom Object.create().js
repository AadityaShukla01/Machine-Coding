What Object.create() Does

Object.create(proto):
Creates a new empty object {}
Sets that object’s internal [[Prototype]] (a.k.a. __proto__) to proto
Returns the new object

It creates a new object that inherits properties and methods from another object.

function customCreate(proto) {
  if (proto === null || (typeof proto !== "object" && typeof proto !== "function")) {
    throw new TypeError("Object prototype may only be an Object or null");
  }

  // Constructor function
  function F() {}
  // Then we assign its prototype to the object we want as the parent:
  F.prototype = proto;
  return new F();
}


JavaScript:
Creates a new empty object {}
Sets its __proto__ to F.prototype (which is our proto)
Returns that object ✅

const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const user = customCreate(person);
user.name = "Aadi";
user.greet(); // Hello, my name is Aadi


// Modern solution
const obj = {};
Object.setPrototypeOf(obj, proto);
return obj;
