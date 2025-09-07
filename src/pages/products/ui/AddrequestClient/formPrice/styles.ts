import { makeStyles } from "@fluentui/react";

export const useFormPricestyles = makeStyles({
    eye_icon: {
        width: "20px",
        height: "20px",
    },
    label_name: {
        fontSize: '6px'
    },
    input_quantity: {
        width: '110px'
    },
    product_title: {
        fontSize: '17px',
        fontWeight: '700'
    },
    price_tot: {
        background: 'var(--primery-green-color)',
        padding: '0 2px',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '14px'
    },
    product_price: {
        background: 'var(--primery-green-color)',
        fontSize: '16px',
        color: '#fff',
        padding: '2px',
        borderRadius: '10px',
        p: {
            padding: '2px',
            margin: '0'
        }
    },
    product_info: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d2ceceff',
        paddingBottom: '8px'
    }
});
