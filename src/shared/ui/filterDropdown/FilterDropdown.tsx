import React from 'react'
import { useFilterDropstyles } from './styles'
import {
    Dropdown,
    Option,
    useId,
} from "@fluentui/react-components";


const FilterDropdown = ({ options, placeholder }: any) => {
    const styles = useFilterDropstyles();
    const dropdownId = useId("dropdown-default");

    return (
        <div className={styles.root}>
            <Dropdown
                id={dropdownId}
                placeholder={placeholder}
                className={styles.dropdown}
                style={{
                    // minWidth: '120px !important',
                    // maxWidth: '120px !important',
                    width: '520px !important',
                }}
            >
                <Option>
                    {''}
                </Option>
                {options.map((option) => (
                    <Option key={option.id}>
                        {option.value}
                    </Option>
                ))}
            </Dropdown>
        </div>
    )
}


export default FilterDropdown