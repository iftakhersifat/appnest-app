import React, { useEffect } from 'react';

const Apps = () => {
    useEffect(() => {
        document.title = "Apps | AppNest";
      }, []);

    return (
        <div>
            <h1>This is Apps</h1>
        </div>
    );
};

export default Apps;