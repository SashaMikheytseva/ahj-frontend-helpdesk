import TicketsWidget from './TicketsWidget';

const widget = new TicketsWidget();
const container = document.querySelector('.container');

widget.bindToDOM(container);
widget.init();
