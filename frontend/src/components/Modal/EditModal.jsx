import BaseModal from './BaseModal';
import { useEffect, useState} from 'react';

const EditModal = ({ isOpenModal, onCloseModal, initialData, onSave }) => {
    const [formData, setFormData] = useState( initialData || {} );

    //Reset each time the modal open with new data
    useEffect (() =>{
        setFormData(initializeData || {});
    }, [initialData, isOpenModal] );

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value}); 
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSave(formData);
        onclose();
    };

    return (
        <BaseModal
            isOpenModal={isOpenModal}
            onCloseModal={onCloseModal}
            title="Edit Sensor"
            footer={
                <>
                    <button onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Save
                    </button>
                </>
            }
        >
            
        </BaseModal>
    );
}