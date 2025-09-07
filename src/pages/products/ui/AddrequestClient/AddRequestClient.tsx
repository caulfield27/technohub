import React, { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { useAddRequestClientstyles } from './styles'
import { mergeStyles } from "@fluentui/react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderTitle,
    Field,
    Input,
    Label,
    Title3,
} from "@fluentui/react-components";
import { drawer_background, drawer_footer, input_container } from "../../../../shared/const/styles";
import { Dismiss24Regular } from '@fluentui/react-icons';
import { useFormik } from 'formik';
import { validationSchema } from './validation';
import type { IProduct } from '@/shared/types/products';
import FormPrice from './formPrice/FormPrice';
import { useProductsStore } from '../../store/products.store';
import { orderProducts } from '../../api';
import { apiUrl } from '@/shared/api/api.config';

interface IAddRequest {
    showDrawer: boolean;
    setShowDrawer: Dispatch<SetStateAction<boolean>>;
    products: IProduct[]
}

const AddRequestClient = ({ showDrawer, setShowDrawer, productFrom }: IAddRequest) => {
    const styles = useAddRequestClientstyles();

    const { products } = useProductsStore();
    const productsChoosed = products?.filter((item) => item.choosed)
    const [loading, setloading] = useState(false)

    const handleorder = async () => {
        const orderObj = {
            orders:
                productsChoosed.map((item) => ({
                    product_id: item.ID,
                    quantity: item.QuantityClient
                }))
        }
        try {
            if (orderObj) {
                setloading(true)
                await orderProducts(apiUrl.orderProduct, orderObj);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setShowDrawer(false)
            setloading(false);
        }

    }


    return (
        <div>
            <Drawer
                type="overlay"
                separator
                open={showDrawer}
                onOpenChange={(_, { open }) => setShowDrawer(open)}
                position="end"
                style={{ width: '380px' }}
            >
                <DrawerHeader className={mergeStyles(drawer_background)}>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular />}
                                onClick={() => setShowDrawer(false)}
                            />
                        }
                    >
                        Создать заявку
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody className={mergeStyles(drawer_background)}>
                    <div>
                        <div className="">
                            {productsChoosed?.map((product) => (
                                <FormPrice
                                    product={product}
                                    key={product.ID}
                                />
                            ))}
                        </div>
                        <div className="">

                        </div>
                    </div>
                </DrawerBody>
                <DrawerFooter className={mergeStyles(drawer_footer)}>

                    <Button
                        form="add_user"
                        type="reset"
                        appearance="secondary"
                        onClick={() => setShowDrawer(prev => !prev)}
                    >
                        Отменить
                    </Button>

                    <Button
                        appearance="primary" form="add_user" type="submit"
                        style={{
                            background: 'var(--primery-green-color)',
                            color: '#fff',
                            opacity: loading ? '.5' : '1',
                        }}
                        onClick={handleorder}
                        disabled={loading}
                    >
                        {loading ? "Обработка..." : "Заказать"}
                    </Button>
                </DrawerFooter>
            </Drawer>
        </div>
    )
}

export default AddRequestClient