import * as Yup from 'yup'

const productId = Yup.object().shape({
  id: Yup.string().required()

})

export default productId
