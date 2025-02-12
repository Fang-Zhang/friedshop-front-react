import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ProductType } from '../../components/ProductCart';
import { BASE_URL } from '../../Utils/Generals';

export const productApiSlice = createApi({
    
    reducerPath : 'api/products',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL}),
    tagTypes : ['Products'],

    endpoints : (builder) => ({

        getAllProducts : builder.query(({
            query : () => '/product',
            providesTags : ['Products']
        })),

        getProduct : builder.query({
            query : (product : ProductType) => `/product/${product.id}`,
            providesTags : ['Products']
        }),

        createProduct: builder.mutation({
            query : (product) => ({
                url : `/product/create`,
                method : 'POST',
                body : product,
            }),
           invalidatesTags : ['Products']
        }),

        updateProduct: builder.mutation({
            query : (data) => ({
                url : 'product/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Products']
        }),

        deleteProduct: builder.mutation({
            query : (id : number) => ({
                url : '/product/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Products']
        })
    })
})


export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useUpdateProductMutation,
    useCreateProductMutation,
    useDeleteProductMutation,
 } = productApiSlice;
