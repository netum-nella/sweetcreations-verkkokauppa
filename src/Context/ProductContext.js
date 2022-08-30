import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
const ProductContext = createContext()


export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([])
  // const [categories, setCategories] = useState()
  // const [category, setCategory] = useState("/products")
  const [productID, setProductID] = useState("")
  const [products, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   const getCategories = async () => {      
  //     let categoriesData
  //     await axios("https://fakestoreapi.com/products/categories").then(
  //       (res) =>
  //         (categoriesData = res.data.map((item) =>
  //           item.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
  //         ))
  //     )
  //     setCategories(categoriesData)
  //   }
  //   getCategories()
  //   setLoading(false)
  // }, [])

  useEffect(() => {
    setLoading(true)
    const getProductData = async () => {
        await axios.get(
          `https://wo46x71x9h.execute-api.us-east-2.amazonaws.com/Prod/Products`, {
            headers: {
              'Access-Control-Allow-Origin': "http://sweety-bucket.s3-website.us-east-2.amazonaws.com",
              'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
              'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            }
          }
        ).then((res) => {
          setProductList(res.data)
          setLoading(false)
        })
    }
    getProductData()
  }, [products])

  useEffect(() => {
    setLoading(true)
    const getProductDetail = async () => {   
      
       productID && productID.length > 0 && await axios.get(`https://fakestoreapi.com/products/${productID}`).then(
        (res) => {
          setProduct(res.data)
          setLoading(false)
        }
      )
    }
    getProductDetail()
  }, [productID])

  const values = {
    products,
    productList,
    productID,
    setProductID,
    // categories,
    // setCategory,
    loading,
  }

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)