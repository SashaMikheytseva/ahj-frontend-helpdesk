export default class Tickets {
  constructor(id, name, status, created) {
    this.ticketsWrapper = document.querySelector('.tickets');
    this.id = id;
    this.name = name;
    this.status = status;
    this.created = created;

    const formated = Tickets.formatDate(this.created);
    let checkbox;
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');
    ticket.dataset.id = this.id;

    if (this.status === 'true' || this.status === true) {
      checkbox = 'checked';
    } else {
      checkbox = '';
    }

    ticket.innerHTML = `
    <div class="ticket-view">
      <label class="ticket-label">
        <input type="checkbox" class="ticket-checkbox" ${checkbox}>
        <span class="ticket-span"></span>
      </label>
      <div class="ticket-content">
        <div class="ticket-name">${this.name}</div>
      </div>
    </div>
    <div class="ticket-created">${formated}</div>
    <div class="ticket-control">
      <button type="button" class="edit-btn">&#9998</button>
      <button type="button" class="delete-btn">X</button>
    </div>`;

    return ticket;
  }

  static formatDate(date) {
    const data = new Date(date);

    let day = data.getDate();
    let month = data.getMonth();
    const year = data.getFullYear();
    let hour = data.getHours();
    let minutes = data.getMinutes();

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month + 1}` : `${month + 1}`;
    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${day}.${month}.${year} ${hour}:${minutes}`;
  }
}
