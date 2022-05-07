import { useEffect } from "react";
import useInventory from "../../api/useInventory";
import Button from "../../components/atoms/Button";
import AddItemRow from "../../components/molecules/Row/AddItemRow";
import AddNewProduct from "../../components/organisms/AddNewProduct";
import Table from "../../components/organisms/Table";
import { BLUE, RED } from "../../components/uikit/colors";
import { Product } from "../../helpers/inventory";
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY } from "../../utility/common";
import { InventoryActionBar, InventoryFooter, InventoryPageLayout, InventoryTable } from "./styles";

const Inventory = () => {

    const {
       // state
       allProducts,
       categoriesMap,
       subcategoriesMap,
       removeProductsList,

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
          <AddNewProduct data={addNewItemRowData} action={handleSave}/>
        </InventoryActionBar>
        <Table data={allProducts} handleRemoveList={handleRemoveList}/>
        <InventoryFooter>
          <Button action={removeProducts} title="Delete" color={RED} isDisabled={!removeProductsList.size} />
        </InventoryFooter>
      </InventoryPageLayout>
    )
}

export default Inventory;
