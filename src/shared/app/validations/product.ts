import * as Yup from 'yup'

const product = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number(),
  quantity: Yup.number().required()

})

export default product
