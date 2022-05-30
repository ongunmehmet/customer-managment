import React from 'react';

const EmptyPage = () => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Empty Page</h5>
                    <p>This is your empty page template to start building beautiful applications.</p>
                </div>
            </div>
        </div>
    );

}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(EmptyPage, comparisonFn);
