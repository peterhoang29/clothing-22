import { createAction } from "../../utils/reducer/reducer.utils"
import CATEGORIES_ACTION_TYPES from "./categories.type"


export const fetchCategoriesStart = () => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
}

export const fetchCategoriesSuccess = (categoriesArray) => {
    return createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
        );
    }
    
    
    export const fetchCategoriesFailed = (error) => {
        return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
    }
    

