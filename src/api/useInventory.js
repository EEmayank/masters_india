import { useEffect } from "react";
import { useState } from "react";
import { BASE_PREFIX, CATEGORY_MAP, END_POINT_PRODUCTS, END_POINT_PRODUCTS_REMOVE, HOST, PRODUCTS, SUBCATEGORY_MAP, SUB_CATEGORIES } from "../utility/api";

const fetchAllProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS;
const removeProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS_REMOVE;

const useInventory = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [categoriesMap, setCategoriesMap] = useState({});
    const [subcategoriesMap, setSubcategoriesMap] = useState({});

    const [removeProductsList, setRemoveProductsList] = useState(new Set());

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


    const addNewProduct = product => setAllProducts(oldProducts => [...oldProducts, product])

    const handleRemoveList = (id, shouldRemove) => {
        console.log(shouldRemove);
        if (shouldRemove) {
            return setRemoveProductsList(oldList => new Set([...oldList, id]));
        }
        setRemoveProductsList(oldList => {
            const list = new Set(oldList);
            list.delete(id);
            return list;
        });
    };

    useEffect(() => {
        console.log(removeProductsList);
    }, [removeProductsList]);

    const removeProducts = () => {
        fetch(removeProductsURL, {
            method: "POST",
            body: JSON.stringify({removeProductsList})
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