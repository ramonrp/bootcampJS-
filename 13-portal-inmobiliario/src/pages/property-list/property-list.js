import {
  getPropertyList,
  getSaleType,
  getProvinces,
} from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';

getPropertyList().then((propertyListApi) => {
  addPropertyRows(propertyListFromApiToVm(propertyListApi));
});

getSaleType().then((saleTypeList) => {
  setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
});

getProvinces().then((provincesList) => {
  setOptions(provincesList, 'select-province', '¿Dónde?');
});
