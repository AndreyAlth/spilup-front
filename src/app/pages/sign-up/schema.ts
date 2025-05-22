import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
    name: Yup.string().trim().required('First name is required'),
    last_name: Yup.string().trim().required('Last name is required'),
    email: Yup.string().trim().email('Invalid email format').required('Email is required'),
    password: Yup.string().trim()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: Yup.string().trim()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
})