export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else if (success === false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
