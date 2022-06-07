import React from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'
import { useSelector } from 'react-redux'

export const Home = () => {
  const {items, status} = useSelector(state => state.products)
  const {data, error, isLoading} = useGetAllProductsQuery()
  return (
    <div><h2>Home</h2></div>
  )
}
