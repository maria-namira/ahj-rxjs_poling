import Widget from './Widget';

const widget = new Widget(
  document.getElementById('root'),
  'https://ahj-11-1-rxjs-poling-sergius.herokuapp.com/messages/unread',
);

widget.subscribeToUpdate();