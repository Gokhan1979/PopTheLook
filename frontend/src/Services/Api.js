const API_URL = "https://api.popthelook.com"; // change later to your backend

export const api = {
  getProducts: async () => {
    // For now mock data - later will connect to backend
    return [
      {id:1,name:'Linen Blouse',price:89},
      {id:2,name:'Rose Mesh Top',price:138},
    ]
  },
  getProduct: async (id) => {
    return {id, name:`Product ${id}`, price:99}
  }
}

export default api
