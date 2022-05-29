const messages = [
    "David",
    "Ana",
    "Jesica",
    "Diego",
    "Juan",
    "Antonela",
    "Carlos",
];

const randomMsg = () => {
    const randomNumber = Math.floor(Math.random() * messages.length);
    const message = messages[randomNumber];
    console.log(message);
};

module.exports= { randomMsg };