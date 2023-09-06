import styles from './productCard.module.css'

const ProductCard = (props) => {
    // console.log(props)

    return (
        <div
            className={styles.productCard}>
            <div title={props.title} className={styles.productImg}>
                <img src={props.thumbnail} alt={props.title} />
            </div>

            <div className={styles.price}>
                <h3 className={styles.prod_name}>{props.title}</h3>

                <p className={styles.oldP}>
                    <span className={styles.oldPrice}>
                        ${props.price}
                    </span>
                    <span className={styles.discountPercent}>-{props.discountPercentage}%</span>
                </p>

                <p className={styles.discountPrice}>${props.discountPrice}
                    {
                        Math.ceil(props.price - (props.discountPercentage / 100) * props.price)
                    }
                </p>
           

                {/* <div className={styles.brand_cat}>
                <p className={styles.brand}>
                    <span
                        style={{ fontWeight: 'semibold' }}>Brand: </span>
                    {props.brand}
                </p>
                |
                <p>Category: <span className={styles.category}>{props.category}</span></p>
            </div>

            <p>Description: <span className={styles.prod_desc}>{props.description}.</span></p>
            <p>In stock: {props.stock}</p> */}

                <p>Rating: {props.rating}</p>
                <button className={styles.btn}>Add to cart</button>

            </div>

        </div>
    )
}

export default ProductCard;