import { useFormPricestyles } from './styles'
import { useProductsStore } from '@/pages/products/store/products.store';
import { Input, Label } from '@fluentui/react-components';
import { mergeStyles } from '@fluentui/react';
import { input_container } from '@/shared/const/styles';

const FormPrice = ({ product } : any) => {
    const styles = useFormPricestyles();
    const { setProductQuantity } = useProductsStore();


    return (
        <div className={mergeStyles(input_container)}>
            <div className={styles.product_info}>
                <div className="">
                    <div className={styles.product_title}>{product.Name}</div>
                    <Label className={styles.label_name}>В наличии <span className={styles.price_tot}>{(product.Quantity - product.Ordered)}{product.Unit}</span></Label>
                    <Input
                        type="text"
                        value={String((product.Quantity - product.Ordered))}
                        placeholder="Макс-кол-во"
                        onChange={(e) => setProductQuantity(product.ID, e.target.value)}
                        appearance="outline"
                        className={styles.input_quantity}
                        max={product.Quantity}
                    />
                </div>
                {/* <p>Итог</p> */}
                <div className={styles.product_price}>
                    <p>сом.{(product.SellPrice * product.QuantityClient)}</p>
                </div>
            </div>
        </div>
    )
}

export default FormPrice