import React from 'react'
import { useFilterDropstyles } from './styles'
import {
    Dropdown,
    Option,
    useId,
} from "@fluentui/react-components";


const FilterDropdown = ({ options, placeholder, value, onChange }: any) => {
    const styles = useFilterDropstyles();
    const dropdownId = useId("dropdown-default");

    return (
        <div className={styles.root}>
            <Dropdown
                id={dropdownId}
                placeholder={placeholder}
                className={styles.dropdown}
                // style={{
                //     // minWidth: '120px !important',
                //     // maxWidth: '120px !important',
                //     width: '520px !important',
                // }}
                value={value}
                // onChange={onChange}
                // onChange={(_, data) => onChange(data.optionValue)}
                onOptionSelect={(_, data) => onChange(data.optionValue)}
            >
                <Option>
                    {''}
                </Option>
                {options.map((option: any) => (
                    <Option key={option.id} value={option.id}>
                        {option.value}
                    </Option>
                ))}
            </Dropdown>
        </div>
    )
}


export default FilterDropdown