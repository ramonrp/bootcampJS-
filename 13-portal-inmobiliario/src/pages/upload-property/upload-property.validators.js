import { createFormValidation, Validators } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 100 },
        message: 'Este campo no puede superar los 100 carácteres',
      },
    ],
    notes: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 250 },
        message: 'Este campo no puede superar los 250 carácteres',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Introduzca un email válido',
      },
    ],
    phone: [
      {
        validator: Validators.pattern,
        message: 'Introduzca un número con formato internacional válido',
        customArgs: {
          pattern:
            /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/,
        },
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        customArgs: { allowZero: false },
        message: 'El precio debe ser un valor positivo',
      },
    ],
    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Elige al menos una opción',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
