const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("Hello World");
        } else {
            reject(new Error("Hello error"));
        }
    }, 2000);
});

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("Message", msg))
    .catch(err => console.error("Error", err));

    