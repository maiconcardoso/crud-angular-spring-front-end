import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  getErrorMessage(formGroup: UntypedFormGroup ,fieldName: string) {
    const field = formGroup.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo Obrigatório'
    }

    if (field?.hasError('minLength')) {
      const requiredLength: number = field.errors ? field.errors['minLength']['requiredLength'] : 5
      return `Tamanho minímo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxLength')) {
      const requiredLength: number = field.errors ? field.errors['maxLength']['requiredLength'] : 80
      return `Tamanho maxímo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo inválido.'
  }
}
