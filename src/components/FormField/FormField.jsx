import React from 'react';

import { Styled } from './FormField.styles';

const FormField = ({ title, name, value, onChange, type = 'text', placeholder = title }) => (
    <Styled.Label>
        {title}
        <Styled.Input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </Styled.Label>
);

export default FormField;
