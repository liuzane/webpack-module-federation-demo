import _ from 'lodash';

function component() {
  const container = document.createElement('div');

  // Render title
  const title = document.createElement('p');
  title.innerText = _.join(['Hello', 'Host'], ' ');
  container.appendChild(title);

  // Load remote1 app
  const loadBtn1 = document.createElement('button');
  loadBtn1.style.display = 'block';
  loadBtn1.style.marginTop = '10px';
  loadBtn1.innerText = 'Load Remote1 App';
  loadBtn1.onclick = () => {
    import('remote1/remoteModule').then(({ bootstrap, hello }) => {
      bootstrap();
      console.log(hello());
    });
  }
  container.appendChild(loadBtn1);

  // Load remote2 app
  const loadBtn2 = document.createElement('button');
  loadBtn2.style.display = 'block';
  loadBtn2.style.marginTop = '10px';
  loadBtn2.innerText = 'Load Remote2 App';
  loadBtn2.onclick = () => {
    import('remote2/remoteModule').then(({ bootstrap, hello }) => {
      bootstrap();
      console.log(hello());
    });
  }
  container.appendChild(loadBtn2);

  return container;
}

document.body.appendChild(component());