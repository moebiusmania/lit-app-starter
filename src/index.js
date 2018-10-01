import { html, render} from 'lit-html';

const root = document.querySelector('#root');

const markup = () => html`
  <h1>lit-html ready! <small>${new Date().toISOString()}</small</h1>
`;

setInterval(() => render(markup(), root), 991);