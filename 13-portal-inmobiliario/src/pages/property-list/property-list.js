import {
  getPropertyList,
  getSaleType,
  getProvinces,
} from './property-list.api';
import {
  addPropertyRows,
  setOptions,
  clearPropertyRows,
} from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';
import {
  roomOptions,
  bathOptions,
  maxPrice,
  minPrice,
} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

Promise.all([getPropertyList(), getSaleType(), getProvinces()]).then(
  ([propertyListApi, saleTypeList, provincesList]) => {
    addPropertyRows(propertyListFromApiToVm(propertyListApi));
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provincesList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathOptions, 'select-bathroom', '¿Baños?');
    setOptions(minPrice, 'select-min-price', 'Min (EUR)');
    setOptions(maxPrice, 'select-max-price', 'Max (EUR)');
  }
);

let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-province', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});

onUpdateField('select-sale-type', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});

onUpdateField('select-room', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});

onUpdateField('select-bathroom', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});

onUpdateField('select-min-price', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});

onUpdateField('select-max-price', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});

onSubmitForm('search-button', (e) => {
  const query = createQueryParams(filter);
  getPropertyList(query).then((propertyListApi) => {
    clearPropertyRows();
    addPropertyRows(propertyListFromApiToVm(propertyListApi));
  });
});

const createQueryParams = (filterObject) => {
  const { provinceId, saleTypeId, minRooms, minBathrooms, minPrice, maxPrice } =
    filterObject;
  const provinceIdQuery = provinceId ? `&provinceId=${provinceId}` : '';
  const saleTypeIdQuery = saleTypeId ? `&saleTypeIds_like=${saleTypeId}` : '';
  const minRoomsQuery = minRooms ? `&rooms_gte=${minRooms}` : '';
  const minBathroomsQuery = minBathrooms
    ? `&bathrooms_gte=${minBathrooms}`
    : '';
  const minPriceQuery = minPrice ? `&price_gte=${minPrice}` : '';
  const maxPriceQuery = maxPrice ? `&price_lte=${maxPrice}` : '';
  const finalQuery = `?${provinceIdQuery}${saleTypeIdQuery}${minRoomsQuery}${minBathroomsQuery}${minPriceQuery}${maxPriceQuery}`;
  return finalQuery;
};
