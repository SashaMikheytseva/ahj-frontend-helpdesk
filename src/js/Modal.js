import Request from './request';

export default class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.modal = document.createElement('div');
    this.request = new Request();
  }

  drawModal(modalType) {
    this.modal.classList.add('modal');
    if (modalType === 'addTicket') {
      this.modal.classList.add('modal-handler');
      this.modal.innerHTML = `
            <form class="modal-form" method ="POST" action ="http://localhost:7070">
                <h2 class="modal-title">Добавить тикет</h2>
                <label class="label-container">
                    <span class="input-title">Краткое описание</span>
                    <input class="input-name" type="text" required>
                </label>
                <label class="label-container">
                    <span class="input-title">Подробное описание</span>
                    <textarea class="input-description" type="text" required></textarea>
                </label>
                <div class="btn-box">
                    <button class="cancel-btn" type="button">Отмена</button>
                    <button class="ok-btn" type="submit">Ок</button>
                </div>
            </form>`;

      this.name = this.modal.querySelector('.input-name');
      this.description = this.modal.querySelector('.input-description');

      this.name.value = '';
      this.description.value = '';
    } else if (modalType === 'editTicket') {
      this.modal.classList.add('modal-handler');
      this.modal.innerHTML = `
            <form class="modal-form" method ="POST" action ="http://localhost:7070">
                <h2 class="modal-title">Изменить тикет</h2>
                <label class="label-container">
                    <span class="input-title">Краткое описание</span>
                    <input class="input-name" type="text" required>
                </label>
                <label class="label-container">
                    <span class="input-title">Подробное описание</span>
                    <textarea class="input-description" type="text" required></textarea>
                </label>
                <div class="btn-box">
                    <button class="cancel-btn" type="button">Отмена</button>
                    <button class="ok-btn" type="submit">Ок</button>
                </div>
            </form>`;
    }

    this.parentEl.append(this.modal);
    this.activeModal = document.querySelector('.modal-handler');

    this.activeModal.style.top = `${
      (window.innerHeight - this.activeModal.offsetHeight) / 2
    }px`;
    this.activeModal.style.left = `${
      (window.innerWidth - this.activeModal.offsetWidth) / 2
    }px`;
  }

  modalHandler(callback) {
    this.name = this.modal.querySelector('.input-name');
    this.description = this.modal.querySelector('.input-description');
    this.form = this.modal.querySelector('.modal-form');
    this.cancelBtn = this.modal.querySelector('.cancel-btn');

    this.cancelBtn.addEventListener('click', (event) => this.closeModal(event));
    this.form.addEventListener('submit', callback);
  }

  closeModal(event) {
    event.preventDefault();
    this.activeModal.remove();
  }
}
