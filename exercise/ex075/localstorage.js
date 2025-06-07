//

localStorage.setItem('name', 'claudio'); // setItem is used to save data.like this: localStorage.setItem('key', 'value')

const name = localStorage.getItem('name'); // getItem is used to get value, across key.like this: localStorage.getItem('key')
console.log(name);

localStorage.removeItem('name'); // removeItem is used to remove item(key and value), across key.like this: localStorage.removeItem('key')

localStorage.clear(); // clear is used to remove all item