export default class Modal {
    constructor() {
        this.openModalButtons = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events();
    }

    events() {
        this.openModalButtons.forEach((el) => {
            el.addEventListener('click', this.openModal.bind(this));
        }, this);

        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.classList.add('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.classList.remove('modal--is-visible');
    }
}
