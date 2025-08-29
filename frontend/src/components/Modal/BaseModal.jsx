import React from 'react';

const BaseModal = ({ isOpenModal, onCloseModal, title, children, footer}) => {
    if (!isOpenModal) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white rounded-xl shadow-lg w-96 p-4'>

                {/* Header */}
                <div className='flex justify-between items-center border-b pb-2'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800" >X</button>
                </div>

                {/* Body */}
                <div className='mt-4'>{children}</div>

                {/* Footer */}
                {footer && <div className='mt-4 flex justify-end space-x-2'> {footer} </div>}

            </div>
        </div>
    );
}

export default BaseModal;