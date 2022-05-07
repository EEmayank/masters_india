import { useEffect } from "react";
import useInventory from "../../api/useInventory";
import Button from "../../components/atoms/Button";
import AddItemRow from "../../components/molecules/Row/AddItemRow";
import Table from "../../components/organisms/Table";
import { BLUE, RED } from "../../components/uikit/colors";
import { Product } from "../../helpers/inventory";
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY } from "../../utility/common";
import { InventoryActionBar, InventoryPageLayout, InventoryTable } from "./styles";

const Inventory = () => {

    const {
       // state
       allProducts,
       categoriesMap,
       subcategoriesMap,

       // methods
       getAllProducts,
       addNewProduct,
       handleRemoveList,
       removeProducts
    } = useInventory();

    // api call
    useEffect(() => {
        getAllProducts();
    }, [])

    const handleSave = (productName, subcategory, category) => {
      if (productName.length < 5) {
        console.log(productName);
        alert("Please enter a valid product name");
        return;
      }

      if (!categoriesMap[category]) {
        alert("Category is not valid!");
        return;
      }

      if (!subcategoriesMap[subcategory]) {
        alert("Subcategory is not valid!");
        return;
      }

      const product = new Product(productName, category, subcategory);
      addNewProduct(product)
  }

  const addNewItemRowData = {
    [RELATION_MAP_FOR_SUBCATEGORY]: {
        "Laptop" : ["Electronics"],
        "Mobile" : ["Electronics"],
        "Tennis" : ["Sports"],
        "Cricket" : ["Sports"]
      },
    [RELATION_MAP_FOR_CATEGORY]: {
        "Electronics" : ["Laptop", "Mobile"],
        "Sports": ["Tennis", "Cricket"]
      }
}
    
    return (
      <InventoryPageLayout>
        <InventoryActionBar>
          <Button title="Add +" color={BLUE} />
          <Button title="Delete" color={RED} action={removeProducts}/>
        </InventoryActionBar>
          <AddItemRow data={addNewItemRowData} action={handleSave}/>
        <InventoryTable>
          <Table data={allProducts} handleRemoveList={handleRemoveList}/>
        </InventoryTable>
      </InventoryPageLayout>
    )
}

export default Inventory;
