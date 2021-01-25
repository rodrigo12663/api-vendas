import * as Yup from 'yup'

const product = Yup.object().shape({
  name: Yup.string().uuid().required(),
  price: Yup.number().min(2),
  quantity: Yup.number().required()

})

export default product
