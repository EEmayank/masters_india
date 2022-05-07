import { useEffect, useState } from "react"
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY, UNSELECTED_CATEGORY, UNSELECTED_SUBCATEGORY } from "../../../utility/common"
import { ROW_TYPE_ADD_NEW } from "../../../utility/constants"
import DropdownCell from "../../atoms/Cell/DropdownCell"
import InputCell from "../../atoms/Cell/InputCell"
import SaveCell from "../../atoms/Cell/SaveCell"
import { RowContainer } from "./styles"

const AddItemRow = ({data, action}) => {

    const subcategoryRelationMap = data[RELATION_MAP_FOR_SUBCATEGORY] ?? {};
    const categoryRelationMap = data[RELATION_MAP_FOR_CATEGORY] ?? {};

    const [selectedCategory, setSelectedCategory] = useState(UNSELECTED_CATEGORY);
    const [categories, setCategories] = useState([]);

    const [selectedSubcategory, setSelectedSubcategory] = useState(UNSELECTED_SUBCATEGORY);
    const [subcategories, setSubcategories] = useState([]);

    const [productName, setProductName] = useState("");

    const handleProductNameChange = e => {
        const value = e.target.value;
        if (value.length < 51) setProductName(value);
    }

    useEffect(() => {
        setCategories(Object.keys(categoryRelationMap));
        setSubcategories(Object.keys(subcategoryRelationMap));
    }, [])

    const updateCategory = newCategory => {
        const relatedSubCategories = categoryRelationMap[newCategory];
        setSelectedSubcategory(UNSELECTED_SUBCATEGORY);
        setSubcategories(relatedSubCategories);
        setSelectedCategory(newCategory);
    }

    const updateSubcategory = newSubCategory => {
        const relatedCategories = subcategoryRelationMap[newSubCategory];
        setSelectedCategory(relatedCategories[0]);
        setSelectedSubcategory(newSubCategory)
    }

    const handleSaveClick = () => {
        action(productName, selectedSubcategory, selectedCategory);
    }

    return <RowContainer type={ROW_TYPE_ADD_NEW}>
        <SaveCell onClick={handleSaveClick} />
        <InputCell value={productName} onChange={handleProductNameChange}/>
        <DropdownCell options={subcategories} selectedValue={selectedSubcategory} onChange={updateSubcategory} />
        <DropdownCell options={categories} selectedValue={selectedCategory} onChange={updateCategory}/>
    </RowContainer>
}

export default AddItemRow