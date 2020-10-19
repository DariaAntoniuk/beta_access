import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { accessKeyOperation } from 'redux/accessKey';

import Form from 'components/Form';
import FormField from 'components/FormField';
import Button from 'components/Button';

const BetaAccessPage = () => {
    const [accessKey, setAccessKey] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = ({ target: { value } }) => {
        setAccessKey(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(accessKeyOperation.checkAccessKey(accessKey));
        setAccessKey('');
    };

    return (
        <div>
            <h1>Beta Access Page</h1>
            <Form onSubmit={handleSubmit}>
                <FormField title="Please enter a code" value={accessKey} onChange={handleInputChange} />

                <Button title="Submit" />
            </Form>
        </div>
    );
};

export default BetaAccessPage;
