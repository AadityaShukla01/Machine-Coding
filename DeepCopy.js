Shallow copy only copies the top level properties of an object, it fails for nested properties.

When we deep clone an object:
We need to copy every property.
If a property is an object or array, we must clone it again recursively.
If a property is a primitive (number, string, boolean, null, etc.), we can copy it directly.


function deepClone(obj) {
  // Base case: if not an object (primitive or null), return as is
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // If it's an array, clone each element
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  // Otherwise, it's a normal object
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively clone each property
      cloned[key] = deepClone(obj[key]);
    }
  }

  return cloned;
}


Recursion is used because:

You don’t know how deeply nested the object might be.

Each nested level can have more nested levels.

Recursion lets the function handle any depth automatically, without loops or hardcoding levels.

It stops when:

It reaches a primitive value or null, returning it directly (base case).

Why are we using hasOwnProperty ?
is used to ensure that we only clone the object’s own properties,
not the ones it inherits from its prototype chain.

Eg
Object.prototype.greet = "hello"; // Bad Practice

const user = { name: "Aadi" };

for (let key in user) {
  console.log(key); 
}

Output - 
name
greet   // inherited from Object.prototype

If you want to avoid this check manually,
you can directly use methods that only access own properties:
Object.keys(obj).forEach(key => {
  clone[key] = deepClone(obj[key]);
});

for (const [key, value] of Object.entries(obj)) {
  clone[key] = deepClone(value);
}


