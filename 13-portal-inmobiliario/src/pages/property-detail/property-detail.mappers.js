import { getEquipments } from './property-detail.api';

export const propertyDetailFromApiToVm = (propertyApi) => {
  const priceFormated = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(propertyApi.price);

  return {
    title: propertyApi.title,
    notes: propertyApi.notes,
    mainImage: propertyApi.images[0],
    images: propertyApi.images,
    id: propertyApi.id,
    price: priceFormated,
    squareMeter: `${propertyApi.squareMeter}m²`,
    rooms:
      propertyApi.rooms > 1
        ? `${propertyApi.rooms} habitaciones`
        : `${propertyApi.rooms} habitación`,
    bathrooms:
      propertyApi.bathrooms > 1
        ? `${propertyApi.bathrooms} cuartos de baño`
        : `${propertyApi.bathrooms} cuarto de baño`,
    mainFeatures: propertyApi.mainFeatures,
    locationUrl: propertyApi.locationUrl,
    equipments: propertyApi.equipmentIds,
  };
};
