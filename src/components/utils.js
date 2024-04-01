export const calculateTotal = (state) => {
    let subtotal = 0.0;
    let totalItems = 0.0;
  
    state.forEach((item) => {
      totalItems += parseFloat(item.qty);
  
      const itemPrice = item.price.replace(",", ".").replace("R$", "");
      const itemPriceParse = parseFloat(itemPrice);
      subtotal += itemPriceParse * item.qty;
    });
    subtotal = subtotal.toFixed(2)
    return { subtotal, totalItems };
  };

  export const splitStores = (product) => {
    if (!product || !product.store) {
      return null;
    }
    return product.store.split("/");
  };