this refers to the object that is currently executing the function. Its value depends on how the function is called, not where it is defined.

| Call Type                    | What `this` Refers To                                 |
| ---------------------------- | ----------------------------------------------------- |
| Function call (`f()`)        | `undefined` (in strict mode) or `window` (non-strict) |
| Method call (`obj.f()`)      | The object `obj`                                      |
| Constructor call (`new F()`) | The new instance created                              |
| `bind` / `call` / `apply`    | Explicitly set value                                  |
| Arrow function               | Lexically inherited from outer scope                  |

This in Arrow Functions

Arrow functions don’t have their own this.
Instead, they lexically capture this from the surrounding scope (the place where they are defined — not where they are called).
In contrast, normal functions get this based on how they are called.
  
const user = {
  name: "Aadi",
  regularFn: function () {
    console.log(this.name); // Aadi
  },
  arrowFn: () => {
    console.log(this.name); // ❌ undefined (inherited from global)
  }
};


const user = {
  name: "Aadi",
  show: function () {
    const arrow = () => console.log(this.name);
    arrow();
  }
};

user.show(); // ✅ "Aadi"
The arrow function is inside a normal function.
It inherits this from its enclosing scope (the show function).
show() was called by user, so this = user.
Therefore, the arrow sees this.name as "Aadi".
