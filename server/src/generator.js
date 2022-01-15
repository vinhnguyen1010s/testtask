const faker = require("faker");
const fs = require("fs");

const randomClients = (number) => {
  if (number < 0) return [];

  const clients = [];

  for (let i = 0; i < number; i++) {
    const client = {
      id: faker.datatype.uuid(),
      name: faker.name.jobTitle(),
      age: faker.datatype.number({ min: 10, max: 99 }),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };
    clients.push(client);
  }

  return clients;
};

(() => {
  const clientList = randomClients(10);
  const db = {
    clients: clientList,
    profile: {
      name: "Vinh Nguyen",
    },
  };

  // Write DB object to db.json
  fs.writeFile("./src/db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully.");
  });
})();
