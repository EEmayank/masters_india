import Button from "../../atoms/Button"
import AddItemRow from "../../molecules/Row/AddItemRow"
import { AddNewProductContainer } from "./styles"

const AddNewProduct = ({
    data,
    action,

}) => {
  return (
    <AddNewProductContainer>
      <AddItemRow data={data} action={action}/>
    </AddNewProductContainer>
  )
}

export default AddNewProduct