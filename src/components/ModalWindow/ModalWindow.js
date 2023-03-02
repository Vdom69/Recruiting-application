import { useState } from 'react';

function ModalWindow() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={openModal} className="bg-blue-800 p-3 rounded-xl text-blue-300 font-bold">Open Modal</button>

      {showModal && (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
          <div className='border-blue-800 border-2 rounded-xl w-96 h-964 mx-auto p-10 mt-10'>
            <div className='flex justify-between text-2xl border-b-2 p-2 border-blue-100 h-12'>
              <div className='text-blue-800 font-bold'>Modal title</div>
              <div className='text-blue-800 font-bold' onClick={closeModal}><i class="bi bi-x-lg"></i></div>
            </div>

            <div className='w-full h-20 mt-10'>
              <div className='text-blue-800 font-bold text-xl'>
                <p>Modal !!!!!!!!!!</p>
              </div>
            </div>

            <div className='flex justify-between px-3 mt-2'>
              <button className='bg-blue-300 w-28 p-3 rounded-xl text-blue-800 font-bold' onClick={closeModal}>Close</button>
              <button className='bg-blue-800 p-3 rounded-xl text-blue-300 font-bold' onClick={closeModal}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalWindow;
