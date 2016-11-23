const isRequired = 'Обязательно для заполнения'
const isNotANumber = 'Поле должно содержать число'
const notEmpty = 'Выберите значение'
const lessThanZero = 'Значение должно быть больше 0'

export const validate = (values) => {
    const errors = {}
    if (!values.stage) {
        errors.stage = notEmpty
    }

    if (!values.quantity) {
        errors.quantity = isRequired
    } else {
        if (isNaN(Number(values.quantity))) {
            errors.quantity = isNotANumber
        } else {
            if (Number(values.quantity) <= 0) {
                errors.quantity = lessThanZero
            }
        }
    }
    if (!values.price) {
        errors.price = isRequired
    } else {
        if (isNaN(Number(values.price))) {
            errors.price = isNotANumber
        } else {
            if (Number(values.quantity) <= 0) {
                errors.price = lessThanZero
            }
        }
    }
    return errors
}
