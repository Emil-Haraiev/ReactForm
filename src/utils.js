import * as Yup from "yup";

export const getInitialValues = () => ({
    name: '',
    email: '',
    address: '',
    age: 0,
});

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Минимум 2 символа для заполнения')
        .required('Обязательное поле!'),
    email: Yup.string()
        .email('Неправильный email адрес')
        .required('Обязательное поле!'),
    age: Yup.number()
        .min(0,'Введите правильный возраст')
})