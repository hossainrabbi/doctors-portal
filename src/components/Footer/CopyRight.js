import React from 'react';

const CopyRight = () => {
    return (
        <div className="py-3 mt-3">
            <p className="text-center">
                Copyright {new Date().getFullYear()} All Rights Reserved
            </p>
        </div>
    );
};

export default CopyRight;
