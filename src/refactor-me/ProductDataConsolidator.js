import { LawnMower, PhoneCase, TShirt } from "../constants/ProductTypes";
import { NZDFactor } from "../constants/CurrencyConversion";
import LawnmowerRepository from "../do-not-refactor/LawnmowerRepository";
import PhoneCaseRepository from "../do-not-refactor/PhoneCaseRepository";
import TShirtRepository from "../do-not-refactor/TShirtRepository";

function ProductDataConsolidator(currencyFactor) {
  console.log(currencyFactor);
  //return product data from repository in a specified format
  const l = new LawnmowerRepository().getAll();
  const p = new PhoneCaseRepository().getAll();
  const t = new TShirtRepository().getAll();
  const products = getProductDetailArray(l, LawnMower, currencyFactor).concat(
    getProductDetailArray(p, PhoneCase, currencyFactor),
    getProductDetailArray(t, TShirt, currencyFactor)
  );
  console.log(products);
  return products;
}

const getProductDetailArray = (
  productArray = [],
  productType = "",
  currency = NZDFactor
) => {
  const productDetail = productArray.map((product) => {
    let rObj = {};
    rObj.id = product.id;
    rObj.name = product.name;
    rObj.price = (product.price * currency).toFixed(2);
    rObj.type = productType;
    return rObj;
  });

  return productDetail;
};

export default ProductDataConsolidator;
