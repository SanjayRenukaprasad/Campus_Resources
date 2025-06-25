import React from 'react';

const Message = ({ type = 'info', children }) => {
    const colorMap = {
        info: 'bg-blue-100 text-blue-800',
        error: 'bg-red-100 text-red-800',
        success: 'bg-green-100 text-green-800',
    };

    return (
        <div className={`p-4 rounded-md ${colorMap[type]} border mb-4`}>
            {children}
        </div>
    );
};

export default Message;
