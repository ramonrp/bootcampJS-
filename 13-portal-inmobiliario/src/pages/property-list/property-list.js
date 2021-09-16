import { getPropertyList } from './property-list.api';
import { addPropertyRows } from './property-list.helpers';

getPropertyList().then((data) => {
  addPropertyRows(data);
});
