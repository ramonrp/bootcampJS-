import { history } from '../../core/router';
import { getPropertyPerId } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';

const params = history.getParams();
if (params.id) {
  getPropertyPerId(params.id).then((propertyArray) => {
    if (propertyArray[0]) {
    }
  });
}
