export default class DeleteModal {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.modal = document.createElement('div');
  }

  init() {
    this.modal.classList.add('modal', 'delete-modal', 'hidden');

    this.modal.innerHTML = `
        <h2 class="modal-title">Удалить тикет</h2>
        <div class="modal-text">Вы уверены, что хотите удалить тикет? Это действие необратимо.</div>
        <div class="btn-box">
          <button class="del-cancel-btn" type="button">Отмена</button>
          <button class="del-ok-btn" type="submit">Ок</button>
        </div>`;

    this.parentEl.append(this.modal);
    this.deleteModal = document.querySelector('.delete-modal');
    this.cancelDelBtn = this.modal.querySelector('.del-cancel-btn');
    this.okDelBtn = this.modal.querySelector('.del-ok-btn');
  }

  openDeleteModal() {
    this.deleteModal.classList.remove('hidden');
    this.deleteModal.style.top = `${
      (window.innerHeight - this.deleteModal.offsetHeight) / 2
    }px`;
    this.deleteModal.style.left = `${
      (window.innerWidth - this.deleteModal.offsetWidth) / 2
    }px`;
    this.cancelDelBtn.addEventListener('click', () => this.closeDeleteModal());
  }

  closeDeleteModal() {
    this.deleteModal.classList.add('hidden');
  }
}
