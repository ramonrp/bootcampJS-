export const propertyFromVMtoApi = (propertyVm) => {
  return {
    id: '',
    title: propertyVm.title,
    notes: propertyVm.notes,
    email: propertyVm.email,
    phone: propertyVm.phone,
    price: Number(propertyVm.price),
    saleTypeIds: propertyVm.saleTypes,
    address: propertyVm.address,
    city: propertyVm.city,
    provinceId: propertyVm.province,
    squareMeter: Number(propertyVm.squareMeter),
    rooms: Number(propertyVm.rooms),
    bathrooms: Number(propertyVm.bathrooms),
    locationUrl: propertyVm.locationUrl,
    mainFeatures: propertyVm.mainFeatures,
    equipmentIds: propertyVm.equipments,
    images: propertyVm.images,
  };
};

/*
id: string
title: string
notes: string
email: string
phone: string
price: number
saleTypeIds: array of strings
address: string
city: string
provinceId: string
squareMeter: number
rooms: number
bathroooms: number
localtionUrl: string
mainFeatures: array of Strings
equipmentIds: array of strings
images: array of strings
*/
