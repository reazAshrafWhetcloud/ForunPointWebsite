import * as yup from 'yup'

export const formSchema = yup.object().shape({
  service: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().min(10).required(),
  description: yup.string().required(),
  //
  company: yup.boolean(),
  companyName: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  street: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  city: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  state: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  zip: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  country: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
  employee: yup.string().when('company', {
    is: (company) => company === true,
    then: yup.string().required(),
  }),
})
