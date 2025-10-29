import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Bootstrap', 'Remote1'], ' ');
  return element;
}

document.body.appendChild(component());