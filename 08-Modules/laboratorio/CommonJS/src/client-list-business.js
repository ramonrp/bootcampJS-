
const DataBusiness = require("./data-business")
const ClientBusiness = require("./client-business")


const {getClients} = DataBusiness
const {getClientElement} = ClientBusiness

function printClientsAccounts() {
    const clients = getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = getClientElement(client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }

module.exports = { printClientsAccounts }