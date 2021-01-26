import * as Yup from 'yup'

const productId = Yup.object().shape({
  id: Yup.string().uuid().required()

})

export default productId
