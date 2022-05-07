import { useEffect, useState } from "react";
import Button from "../../components/atoms/Button";
import Table from "../../components/organisms/Table";
import { CATEGORY, NAME, PRODUCTS, SUB_CATEGORY } from "../../utility/api";

const Inventory = () => {

    const fetchAllProducts = () => {
      fetch("http://localhost:8080/inventory/products")
      .then(resp => resp.json())
      .then(data => {
        const tableData = data[PRODUCTS] ?? [];
        setTableData(tableData);
      })
    }

    const addNewRow = (productName, subcategory, category) => {
      setTableData(tableData => [...tableData, {
        [NAME]: productName,
        [CATEGORY]: category,
        [SUB_CATEGORY]: subcategory
      }])
    }
    const addProduct = () => {
      fetch()
    }

    // api call
    useEffect(() => {
        fetchAllProducts();
    }, [])

    const [tableData, setTableData] = useState([]);
    
    return (
      <>
        <Button title="Add +" action={addProduct}/>
        <Table data={tableData} addNewRow={addNewRow}/>
      </>
    )
}

export default Inventory;
