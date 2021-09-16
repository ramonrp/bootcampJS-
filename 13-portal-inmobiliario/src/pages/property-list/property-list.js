import {
  getPropertyList,
  getSaleType,
  getProvinces,
} from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';
import {
  roomOptions,
  bathOptions,
  maxPrice,
  minPrice,
} from './property-list.constants';

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
