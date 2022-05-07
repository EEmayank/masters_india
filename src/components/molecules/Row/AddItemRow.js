import { useEffect, useState } from "react"
import { RELATION_MAP_FOR_CATEGORY, RELATION_MAP_FOR_SUBCATEGORY, UNSELECTED_CATEGORY, UNSELECTED_SUBCATEGORY } from "../../../utility/common"
import Button from "../../atoms/Button"
import DropdownCell from "../../atoms/Cell/DropdownCell"
import InputCell from "../../atoms/Cell/InputCell"
import { BLUE } from "../../uikit/colors"
import { AddProductRowContainer } from "./styles"

const AddItemRow = ({data, action}) => {

    const commonCss = {
        display: "flex",
        justifyContent: "center"
    }

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
    }, [categoryRelationMap, subcategoryRelationMap])

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

    return <AddProductRowContainer>
        <div style={{margin: "auto"}}><Button title="Add" action={handleSaveClick} color={BLUE} /></div>
        <InputCell style={commonCss} value={productName} onChange={handleProductNameChange}/>
        <DropdownCell style={commonCss} options={subcategories} selectedValue={selectedSubcategory} onChange={updateSubcategory} />
        <DropdownCell style={commonCss} options={categories} selectedValue={selectedCategory} onChange={updateCategory}/>
    </AddProductRowContainer>
}

export default AddItemRow