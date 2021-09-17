import { createFormValidation, Validators } from '@lemoncode/fonk';

const validatorSchema = {
  field: {
    email: [
      {
        validator: Validators.required,
        message: 'campo requerido',
      },
      {
        validator: Validators.email,
        message: 'formato de email no válido',
      },
    ],
    message: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 250 },
        message: 'El mensaje no puede contener más de 250 caráteres',
      },
    ],
  },
};

export const formValidator = createFormValidation(validatorSchema);
