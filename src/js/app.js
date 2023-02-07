import Widget from './Widget';

const widget = new Widget(
  document.getElementById('root'),
  'https://github.com/maria-namira/ahj-rxjs_poling.git',
);

widget.subscribeToUpdate();