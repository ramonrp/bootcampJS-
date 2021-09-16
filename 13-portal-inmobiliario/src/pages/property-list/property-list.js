import {
  getPropertyList,
  getSaleType,
  getProvinces,
} from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';

Promise.all([getPropertyList(), getSaleType(), getProvinces()]).then(
  ([propertyListApi, saleTypeList, provincesList]) => {
    addPropertyRows(propertyListFromApiToVm(propertyListApi));
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provincesList, 'select-province', '¿Dónde?');
  }
);
