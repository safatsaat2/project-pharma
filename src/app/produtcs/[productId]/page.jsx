import React from 'react';

const page = ({params}) => {

    return (
        <div>
            This page is for single product, which is {params.productId}
        </div>
    );
};

export default page;