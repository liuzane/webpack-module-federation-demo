import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Bootstrap', 'Remote2'], ' ');
  return element;
}

document.body.appendChild(component());