export const paymentService = {
  checkout: async (cart) => {
    const total = cart.reduce((s,i)=>s+i.price,0)
    // Mock payment - later connect to Stripe
    console.log('Paying £'+total)
    return { success: true, total }
  }
}
