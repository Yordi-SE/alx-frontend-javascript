import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
const pro = handleResponseFromAPI(promise);
console.log(pro);
