import styles from './styles.module.css'
import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
// import pumpkinspice from './images/pumpkinspice.jpg';

const Card = ({
  product,
  addToFavorite,
  findFavoriteItem,
  addToCart,
  findCartItem,
}) => {

  return (
    <div key={`${product.product_id}-product`} className={styles.card} title={product.product_name}>
      <div className={styles.cardLink}>
        {/* <button
          className={
            !findFavoriteItem ? styles.favButton : styles.removeFavButton
          }
          onClick={() => {
            addToFavorite(product, findFavoriteItem)
          }}
        >
          <HeartIcon className={styles.heartIcon} />
        </button> */}
        <Link to={`/Product/${product.product_id}`}>
          <div className={styles.cardHeader}>
            <img className={styles.cardImg} src={product.image} alt="" />
          </div>
          {/* <div class="panel-body">
              <img
                src={pumpkinspice}
                alt="kuvan nimi"
                style="width: 100px; height: 100px"
              />
            </div>
            <div class="panel-footer"></div> */}
        </Link>
        <div className={styles.cardBody}>
          <div>
            <p className={styles.cardTitle} title={product.product_name}>
              <span className={styles.brand} title="Brand">
                Brand,
              </span>{" "}
              {product.product_name}
            </p>
          </div>
          {/* <div className={styles.rating} title={product.rating.rate}>
            {[...Array(Math.round(product.rating.rate))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.starIcon}
                aria-hidden="true"
              />
            ))}
            {[...Array(5 - Math.round(product.rating.rate))].map((e, i) => (
              <StarIcon
                key={`empty-star-${i}`}
                className={styles.emptyStarIcon}
                aria-hidden="true"
              />
            ))}
            <p className="text-xs ml-1 font-light mt-0.5">
              ({product.rating.count})
            </p>
          </div> */}
          <div>
            <div className="my-auto" title={`$${product.product_price}`}>
              <span className={styles.priceSub}>$</span>
              <span className={styles.priceTop}>{Math.trunc(product.product_price)}</span>
              {parseInt((product.product_price % 1).toFixed(2).substring(2)) !== 0 ? (
                <span className={styles.priceSub}>
                  {parseInt((product.product_price % 1).toFixed(2).substring(2))}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={styles.addToCart}>
            <button
              className={
                !findCartItem ? styles.addToCartButton : styles.removeButton
              }
              onClick={() => addToCart(product, findCartItem)}
            >
              <ShoppingCartIcon
                className={styles.shoppingCartIcon}
                aria-hidden="true"
              />
              <div className="flex flex-col self-center">
                <span className={styles.buttonText}>
                  {findCartItem ? "Remove from cart" : "Add to Cart"}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card