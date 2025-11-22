// findIndex is used to find index of array's elements

const users = [
  { id: 1, name: "claudio", job: "developer" },
  { id: 2, name: "bento", job: "nurse" },
  { id: 3, name: "dala", job: "doctor" },
];

const userIndexFound = users.findIndex(user => user.id === 5)

console.log(userIndexFound)

// if found resulted is 1, else resulted is -1