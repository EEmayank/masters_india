import { useEffect, useState } from "react";
import { BASE_PREFIX, CATEGORY, CATEGORY_MAP, END_POINT_PRODUCT, END_POINT_PRODUCTS, END_POINT_PRODUCTS_REMOVE, HOST, NAME, PRODUCTS, SUBCATEGORY_MAP, SUB_CATEGORIES, SUB_CATEGORY } from "../utility/api";
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY } from "../utility/common";

const fetchAllProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS;
const removeProductsURL = HOST + BASE_PREFIX + END_POINT_PRODUCTS_REMOVE;
const addNewProductURL = HOST + BASE_PREFIX + END_POINT_PRODUCT;

const useInventory = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [relationMap, setRelationMap] = useState({});

    const [removeProductsList, setRemoveProductsList] = useState(new Set());

    const [sortToggle, setSortToggle] = useState({
        [NAME]: false,
        [CATEGORY]: false,
        [SUB_CATEGORY]: false
    })

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
            const map = {
                [RELATION_MAP_FOR_CATEGORY]: categories_map,
                [RELATION_MAP_FOR_SUBCATEGORY]: subcategories_map
                }
            setRelationMap(map);
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

    const sortByProperty = (field, toggleOrder, list) => {
        const temp = [...list];
        if (toggleOrder) {
            temp.sort((a, b) => a[field].localeCompare(b[field]));
        } else {
            temp.sort((a, b) => b[field].localeCompare(a[field]));
        }
        return temp;
    }

    const sortByCategories = () => {
        setSortToggle(old => ({...old, [CATEGORY]: !old[CATEGORY]}));
        setAllProducts(list => [...sortByProperty(CATEGORY, sortToggle[CATEGORY], list)]);
    }

    const sortBySubcategories = () => {
        setSortToggle(old => ({...old, [SUB_CATEGORY]: !old[SUB_CATEGORY]}));
        setAllProducts(list => [...sortByProperty(SUB_CATEGORY, sortToggle[SUB_CATEGORY], list)]);
    }

    const sortByName = () => {
        setSortToggle(old => ({...old, [NAME]: !old[NAME]}));
        setAllProducts(list => [...sortByProperty(NAME, sortToggle[NAME], list)]);
    }

    return {
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
    }
}

export default useInventory;
