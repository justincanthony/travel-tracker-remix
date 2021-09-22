// import React, { useState, useEffect } from 'react';
// import MicroModal from 'react-micro-modal';
// import TriggerButton from '../trigger_button/TriggerButton';
// import Modal from '../modal/Modal';

// const ModalContainer = () => {
// 	const [isShown, setIsShown] = useState(false);

// 	const showModal = () => {
// 		setIsShown({ isShown: true }, () => {
// 			this.closeButton.focus();
// 		});
// 		toggleScrollLock();
// 	};

// 	const closeModal = () => {
// 		setIsShown({ isShown: false });
// 		TriggerButton.focus();
// 		toggleScrollLock();
// 	};

// 	const onKeyDown = (event) => {
// 		if (event.keyCode === 27) {
// 			this.closeModal();
// 		}
// 	};

// 	const onClickOutside = (event) => {
// 		if (this.modal && this.modal.contains(event.target)) return;
// 		closeModal();
// 	};

// 	const toggleScrollLock = () => {
// 		document.querySelector('html').classList.toggle('scroll-lock');
// 	};

// 	return (
// 		<React.Fragment>
// 			<TriggerButton
// 				showModal={showModal}
// 				buttonRef={(n) => (TriggerButton = n)}
// 				// triggerText={triggerText}
// 			/>
// 			{isShown ? (
// 				<Modal
// 					onSubmit={this.props.onSubmit}
// 					modalRef={(n) => (this.modal = n)}
// 					buttonRef={(n) => (this.closeButton = n)}
// 					closeModal={closeModal}
// 					onKeyDown={onKeyDown}
// 					onClickOutside={onClickOutside}
// 				/>
// 			) : null}
// 		</React.Fragment>
// 	);
// };

// export default ModalContainer;
