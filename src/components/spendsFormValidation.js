const isRequired = 'Обязательно для заполнения';
const isNotANumber = 'Поле должно содержать число';
const notEmpty = 'Выберите значение';

export const validate = values => {
    const errors = {}
    if (!values.stage) {
        errors.stage = notEmpty
    }

    if (!values.quantity) {
        errors.quantity = isRequired
    } else {
        if (isNaN(Number(values.quantity))) {
            errors.quantity = isNotANumber
        }
    }
    if (!values.price) {
        errors.price = isRequired
    } else {
        if (isNaN(Number(values.price))) {
            errors.price = isNotANumber
        }
    }
    return errors
}