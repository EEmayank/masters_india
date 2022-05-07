import { useEffect } from "react";
import useInventory from "../../api/useInventory";
import Button from "../../components/atoms/Button";
import AddNewProduct from "../../components/organisms/AddNewProduct";
import Table from "../../components/organisms/Table";
import { RED } from "../../components/uikit/colors";
import { Product } from "../../helpers/inventory";
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY } from "../../utility/common";
import { FIELD_TYPE_CATEGORY, FIELD_TYPE_PRODUCT, FIELD_TYPE_SUBCATEGORY } from "../../utility/constants";
import { InventoryActionBar, InventoryFooter, InventoryPageLayout } from "./styles";

const Inventory = () => {

    const {
       // state
       allProducts,
       relationMap,
       removeProductsList,

       // methods
       getAllProducts,
       addNewProduct,
       handleRemoveList,
       removeProducts,

       // sorting
       sortByName,
       sortByCategories,
       sortBySubcategories
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

      if (!relationMap[RELATION_MAP_FOR_CATEGORY][category]) {
        alert("Category is not valid!");
        return;
      }

      if (!relationMap[RELATION_MAP_FOR_SUBCATEGORY][subcategory]) {
        alert("Subcategory is not valid!");
        return;
      }

      const product = new Product(productName, category, subcategory);
      addNewProduct(product)
  }

  
  
    
    return (
      <InventoryPageLayout>
        <InventoryActionBar>
          <AddNewProduct data={relationMap} action={handleSave}/>
        </InventoryActionBar>
        <Table 
          data={allProducts} 
          handleRemoveList={handleRemoveList} 
          sortMethods={{
            [FIELD_TYPE_PRODUCT]:  sortByName,
            [FIELD_TYPE_CATEGORY]: sortByCategories,
            [FIELD_TYPE_SUBCATEGORY]: sortBySubcategories
          }}
        />
        <InventoryFooter>
          <Button action={removeProducts} title="Delete" color={RED} isDisabled={!removeProductsList.size} />
        </InventoryFooter>
      </InventoryPageLayout>
    )
}

export default Inventory;
