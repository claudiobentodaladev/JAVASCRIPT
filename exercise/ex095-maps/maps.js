// Maps is a diferent way to create an object but do not must to have same KEY on it

const users = new Map([
    ["claudio", {
        age: 16,
        job: "software developer"
    }]
]);

users.set("bento", {
    age: 18,
    job: "graphic design"
})

users.set("dala", {
    age: 57,
    job: "doctor"
})

// to return key and value
for (const [key, { age, job }] of users.entries()) {
    console.log(`${key} is ${age} years olds and work as a ${job}`)
}

// to return key
for (const key of users.keys()) {
    console.log(`Hello there, i am ${key}`)
}

// to return value
for (const { age, job } of users.values()) {
    console.log(`i am ${age} and i work as a ${job}`)
}