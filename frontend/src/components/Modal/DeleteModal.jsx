import BaseModal from "./BaseModal";

const DeleteModal = ({ isOpenModal, onCloseModal, onDelete}) => {
    return (
        <BaseModal 
            isOpenModal={isOpenModal}
            onClose={onCloseModal}
            title="Confirm Delete"
            footer={
                <>
                    <button onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded">
                        Cancel
                    </button>
                    <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded">
                        Confirm
                    </button>
                </>
            }
        >
            <p>Are you sure you want to delete this item?</p>
        </BaseModal>
    );
}

export default DeleteModal;