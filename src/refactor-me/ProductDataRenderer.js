import ProductDataConsolidator from "./ProductDataConsolidator";
import * as currencyTypes from "../constants/CurrencyTypes";
import {
  NZDFactor,
  USDFactor,
  EuroFactor,
} from "../constants/CurrencyConversion";

const ProductDataRenderer = (props) => {
  const { currency } = props;
  let currencyFactor;
  currency === currencyTypes.USD
    ? (currencyFactor = USDFactor)
    : currency === currencyTypes.Euro
    ? (currencyFactor = EuroFactor)
    : (currencyFactor = NZDFactor);
  let html = (
    <table class="table table-striped">
      <thead>
        <tr>
          <td colspan="3">Products ( {currency} ) </td>
        </tr>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Type</td>
        </tr>
      </thead>
      <tbody>
        {ProductDataConsolidator(currencyFactor).map((product, index) => {
          return (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return html;
};

export default ProductDataRenderer;
