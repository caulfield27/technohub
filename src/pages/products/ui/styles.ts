import { makeStyles } from "@fluentui/react";

export const useProductstyles = makeStyles({
    page_title: {
        padding: '12px 0'
    },
    // search_container: {
    //     marginBottom: '22px'

    // },
    input_filed: {
        width: '280px',
        height: '42px'
    },
    filter_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '22px',
    },
    add_btn: {
        width: '128px',
        height: '35px'
    },
    tablist_container: {
        marginBottom: '18px'
    },
    tablist: {
        // перекрашиваем underline у активного таба
        '& .fui-Tab[aria-selected="true"]::after': {
            backgroundColor: 'var(--primery-green-color) !important',
        },
    },
    filters: {
        marginBottom: '21px',
        display: 'flex',
        alignItems: 'center',
        gap: '50px'
    },
    filter_price: {
        display: 'flex',
        alignItems: 'center',
        gap: '7px'
    },
    input_price: {
        width: '82px'
    },
    dropdowns: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
});
