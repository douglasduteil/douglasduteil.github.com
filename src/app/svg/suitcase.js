//

const _ = {};
export default (render, state) => {
  return render(state || _, 'svg:suitecase')`
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28">
    <path d="M10 6h8v-2h-8v2zM4.5 6v20h-1c-1.922 0-3.5-1.578-3.5-3.5v-13c0-1.922 1.578-3.5 3.5-3.5h1zM22 6v20h-16v-20h2v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h2zM28 9.5v13c0 1.922-1.578 3.5-3.5 3.5h-1v-20h1c1.922 0 3.5 1.578 3.5 3.5z"></path>
  </svg>
  `;
};
