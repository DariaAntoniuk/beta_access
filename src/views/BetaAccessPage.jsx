import React, { useState } from 'react';

import { Form } from '../components/Form';
import { FormField } from '../components/FormField';
import { Button } from '../components/Button';

const BetaAccessPage = () => {
    const [code, setCode] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setCode(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        console.log('submit', code);
        setCode('');
    };

    return (
        <div>
            <h1>Beta Access Page</h1>
            <Form onSubmit={handleSubmit}>
                <FormField title="Please enter a code" value={code} onChange={handleInputChange} />

                <Button title="Submit" />
            </Form>
        </div>
    );
};

export default BetaAccessPage;
