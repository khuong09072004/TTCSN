import { apiDefault } from ".";
import { ApiConstant } from "../constants/api.constant";

const itemCourse = () => ({
    getAllItemCourse: async () => apiDefault.get(ApiConstant.course.getAllCourse),
    getCourseByCategory: async (categoryId) =>
        apiDefault.get(ApiConstant.course.getCourseByCategory.replace(':categoryId', categoryId)),
});

const productApi = {
    async getAll(params, idCategory) {
        const newParams = { ...params };
        const productList = await apiDefault.get(
            ApiConstant.course.getCourseByCategory.replace(':categoryId', idCategory),
            { params: newParams }
        );
        return {
            data: productList.data, 
        };
    },
};

export const { getAllItemCourse, getCourseByCategory } = itemCourse();
export default productApi;
