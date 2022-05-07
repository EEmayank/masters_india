import { useEffect } from "react";
import { useState } from "react";
import { BASE_PREFIX, CATEGORY_MAP, END_POINT_PRODUCT, END_POINT_PRODUCTS, END_POINT_PRODUCTS_REMOVE, HOST, PRODUCTS, SUBCATEGORY_MAP, SUB_CATEGORIES } from "../utility/api";

const fetchAllProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS;
const removeProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS_REMOVE;
const addNewProductURL = HOST + BASE_PREFIX + END_POINT_PRODUCT;

const useInventory = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [categoriesMap, setCategoriesMap] = useState({});
    const [subcategoriesMap, setSubcategoriesMap] = useState({});

    const [removeProductsList, setRemoveProductsList] = useState(new Set());

    /**
     * inventory/products
     * 
     * reponse 
     * categoryMap : {},
     * subcategoryMap: {},
     * products: [
     *  {id, name, subcategory, category}
     * ]
     */
    const getAllProducts = () => {
        fetch(fetchAllProductsURL)
        .then (resp => resp.json())
        .then (data => {
            const allProducts = data[PRODUCTS] ?? [];
            const categories_map = data[CATEGORY_MAP] ?? {};
            const subcategories_map = data[SUBCATEGORY_MAP] ?? {};

            setAllProducts(allProducts);
            setCategoriesMap(categories_map);
            setSubcategoriesMap(subcategories_map);
        })
        .catch(e => {
            console.error("failed to fetch all products due to: ", e.message);
        })
    }


    /**
     *Request URL: inventory/product

     * req
     * {"product":{"name":"sdfsdf","category":"Electronics","subcategory":"Laptop"}}
     * 
     * resp
     * {status: true/false}
     */
    const addNewProduct = product => {
        fetch(addNewProductURL, {
            method: "POST",
            body: JSON.stringify({product})
        })
        .then(resp => resp.json())
        .then(data => {
            const status = data['status'] ?? false;
            if (status) {
                getAllProducts();
            } else  {
                alert("failed to add product");
            }
        })
    }

    const handleRemoveList = (id, shouldRemove) => {
        if (shouldRemove) {
            return setRemoveProductsList(oldList => new Set([...oldList, id]));
        }
        setRemoveProductsList(oldList => {
            const list = new Set(oldList);
            list.delete(id);
            return list;
        });
    };

    /**
     * Request URL: inventory/products/remove
     * 
     * req
     * {"removeProductsList":[634,24324,4543,43423423]}
     * 
     * resp 
     * {status: true/false}
     */
    const removeProducts = () => {
        fetch(removeProductsURL, {
            method: "DELETE",
            body: JSON.stringify({removeProductsList: Array.from(removeProductsList)})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status) {
                getAllProducts();
            } else {
                alert("failed to remove selected products, please try again!")
            }
        })
    }


    return {
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
    }
}

export default useInventory;