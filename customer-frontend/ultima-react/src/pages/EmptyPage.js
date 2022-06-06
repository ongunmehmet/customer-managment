import React from 'react';

const EmptyPage = () => {

    return (
        <div className="grid">
            <div className="col-12">

            </div>
        </div>
    );

}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(EmptyPage, comparisonFn);
