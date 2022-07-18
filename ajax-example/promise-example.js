let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const message = "Promise resolved successfully";
    resolve(message);
  } else {
    const why = "Promise failed";
    reject(why);
  }
});

/**
 * Promise has 3 states 
 * 1. Resolve 
 * 2. Reject 
 * 3. Pending 
 */

isItDoneYet
  .then((ok) => {
    console.log('----- then ------')
    console.log(ok);
  })
  .catch((err) => {
    console.log('----- catch ------')
    console.error(err);
  });