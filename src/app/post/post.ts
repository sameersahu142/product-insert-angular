

export interface Product {
    name: string;
    definitionUrl: string;
}
export interface Item {
    caption: string;
    type: string;
    mandatory: boolean;
    defaultValue : string;
    validationMessage: string;
    value: any;
    validators: FormValidators;
    // required: boolean;
}

interface FormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
    value: string;
}