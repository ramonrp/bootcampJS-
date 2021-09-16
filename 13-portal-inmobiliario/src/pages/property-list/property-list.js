import { getPropertyList } from './property-list.api';
import { addPropertyRows } from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';

getPropertyList().then((propertyListApi) => {
  addPropertyRows(propertyListFromApiToVm(propertyListApi));
});
