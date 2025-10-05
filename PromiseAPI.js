A Promise represents a value that may be available now, later, or never.
A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

It provides a clean, structured way to handle async results instead of deeply nested callbacks (“callback hell”).
A Promise can be in one of three states:
pending → operation not yet completed
fulfilled → operation completed successfully (resolve)
rejected → operation failed (reject)

You handle results using:

1. Promise.all()
Waits for all promises to fulfill (or rejects if any one fails).

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(values => console.log(values)) // [10, 20, 30]
  .catch(err => console.error(err));

Use When:
You need all results before continuing.
Failing any task means you can’t proceed (e.g., fetching multiple API data needed together).

2. Promise.allSettled()
Waits for all promises to settle (fulfill or reject).
Returns an array describing each result.
Useful for bulk tasks where one failure shouldn’t cancel others (e.g., sending emails to many users).

3. Promise.race()
Returns the first promise to settle (fulfill or reject).
  
4. Promise.any()
Waits for the first fulfilled promise.
Ignores rejections unless all promises reject.
If all reject → throws an AggregateError.

Goal	Use
Need all results	Promise.all
Need each result, even if failed	Promise.allSettled
Need first completed	Promise.race
Need first success only	Promise.any
