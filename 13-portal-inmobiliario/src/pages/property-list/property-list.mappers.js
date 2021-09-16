export const propertyListFromApiToVm = (propertyListApi) => {
  return propertyListApi.map((propertyApi) => propertyFromApitoVm(propertyApi));
};

const propertyFromApitoVm = (propertyApi) => {
  const priceFormated = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(propertyApi.price);

  return {
    title: propertyApi.title,
    notes: `${propertyApi.notes.substring(0, 200)}...`,
    image: propertyApi.images[0],
    id: propertyApi.id,
    price: priceFormated,
    squareMeter: `${propertyApi.squareMeter}m²`,
    rooms:
      propertyApi.rooms > 1
        ? `${propertyApi.rooms} habitaciones`
        : `${propertyApi.rooms} habitación`,
  };
};
