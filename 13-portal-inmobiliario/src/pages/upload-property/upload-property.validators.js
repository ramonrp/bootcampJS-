import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

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
        validator: Validators.phone,
        message: 'Introduzca un email válido',
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
  },
};
