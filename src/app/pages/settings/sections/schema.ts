import * as Yup from 'yup'

export const updateUserSchema = Yup.object().shape({
    name: Yup.string(),
    last_name: Yup.string()
})