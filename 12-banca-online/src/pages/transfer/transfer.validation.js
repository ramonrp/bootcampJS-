import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { maxNumber } from '@lemoncode/fonk-max-number-validator';
import { isNumber } from '@lemoncode/fonk-is-number-validator';
import { minNumber } from '@lemoncode/fonk-min-number-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { previousDate } from '@lemoncode/fonk-previous-date-validator';

const maxYearValid = new Date().getFullYear() + 2;
const minYearValid = new Date().getFullYear();
const minValidDate = new Date(new Date().setDate(new Date().getDate() - 1));
const maxValidDate = new Date(
  new Date().setFullYear(new Date().getFullYear() + 2)
);

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /\w{2}\d{2}?\d{4}?\d{4}?\d{4}?\d{4}?\d{2}/ },
        message: 'La cuenta no cumple el formato IBAN',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: isNumber.validator,
        message: 'Introduzca un número',
      },
      {
        validator: positiveNumber.validator,
        message: 'No se pueden introducir cantidades negativas',
      },
      {
        validator: maxNumber.validator,
        customArgs: { maxValue: 10000, inclusive: true },
        message: 'La transferencia no puede superar los 10.000€',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 20 },
        message: 'La máxima longitud del concepto debe ser 20 carácteres',
      },
    ],
    notes: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 100 },
        message: 'La longitud máxima es de 100 carácteres',
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Introduzca una dirección válida de email',
      },
    ],
    day: [
      {
        validator: isNumber.validator,
        message: 'Introduzca un número',
      },
      {
        validator: positiveNumber.validator,
        message: 'No se pueden introducir cantidades negativas',
        customArgs: { allowZero: false },
      },
      {
        validator: maxNumber.validator,
        customArgs: { maxValue: 31, inclusive: true },
        message: 'Día del mes no válido',
      },
    ],
    month: [
      {
        validator: isNumber.validator,
        message: 'Introduzca un número',
      },
      {
        validator: positiveNumber.validator,
        message: 'No se pueden introducir cantidades negativas',
        customArgs: { allowZero: false },
      },
      {
        validator: maxNumber.validator,
        customArgs: { maxValue: 12, inclusive: true },
        message: 'Introduzca un mes válido',
      },
    ],
    year: [
      {
        validator: isNumber.validator,
        message: 'Introduzca un número',
      },
      {
        validator: positiveNumber.validator,
        message: 'No hay transferencias AC',
        customArgs: { allowZero: false },
      },
      {
        validator: maxNumber.validator,
        customArgs: { maxValue: maxYearValid, inclusive: true },
        message: 'Año máximo son dos años desde la fecha actual',
      },
      {
        validator: minNumber.validator,
        customArgs: { minValue: minYearValid, inclusive: true },
        message: 'El año tiene que ser superior al actual',
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: { date: minValidDate },
        message: 'La transferencia debe ser posterior a la fecha actual',
      },
      {
        validator: previousDate.validator,
        customArgs: { date: maxValidDate },
        message:
          'Las transferencia debe ser programada en los próximos dos años',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
