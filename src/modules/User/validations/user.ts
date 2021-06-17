import * as Yup from 'yup'

const user = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string()

})

export default user
