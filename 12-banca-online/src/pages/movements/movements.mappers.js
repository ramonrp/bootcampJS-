export const movementListFromApitoVM = (movementListApi) => {
  return movementListApi.map((movementApi) => movementApiToVm(movementApi));
};

const movementApiToVm = (movementApi) => {
  return {
    ...movementApi,
    transaction: new Date(movementApi.transaction).toLocaleDateString(),
    realTransaction: new Date(movementApi.realTransaction).toLocaleDateString(),
    amount: `${movementApi.amount} €`,
    balance: `${movementApi.balance} €`,
  };
};

export const accountFromApiToVM = (account) => {
  return {
    iban: account.iban,
    balance: `${account.balance} €`,
    name: account.name,
  };
};
