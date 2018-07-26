//

import { githubIcon, locationIcon, suitcaseIcon } from './svg';

const gravatar_pic =
  'http://1.gravatar.com/avatar/1e7cd3d5b060997af752aee10d724da1';
const mini_me = gravatar_pic + '?s=20';
const mini_me_64 =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAFAAUAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+7viMk2o6jax21q0hhXLNJIxiGPVc4/OvPfhx41tdW8S6p/b1tA2n+SwtWgjwQytjK49eevp9a828L/tGX9z4bSz1HVDJI6/PLGIyxLjodpOcZIz7H8Od8JSXWn6zF4me9httLuIJLVPPG0NgJgrk/N2B9/xrkw2EVSnVlPdHmYrFyoVqcIq6k7PyPV9e19LrU5GiudVMK/LH5ki7to9eKK8x1H4prBdMgk0mQDoZIzn/wBBNFcywq7Hpc8z4l8J+L9R0Xxho/lOs0d0zxyRXALp86smcZ6ruLD0bmvRrnX7i60/Q7SdY54/s8lwGcHerM7DAYHIA9B+OaKK+lwSX1ap6fozzq8VLEUU11/zPONYv7hL1h5rtx1ZiaKKK8dH16pwt8KP/9k=';
const me = gravatar_pic + '?s=680';

// HACK(douglasduteil): use require notation to ensure that the mocked cache is
// used.
//
// I want to write :
// import styles from './menu.scss';
// but node doesn't want to load "scss" file...
// more other the require module cache seems to be different...
// "import ...from ..." and "import(...)" seems to use another cache that
// I don't know about #frustractedDouglas
//
const styles = require('./me.scss');

const inlineStyle = `
main {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-image: url(${me}), url(${mini_me_64});
  background-position: center center;
  background-size: cover;
}

ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 50px;
  padding: 20vh 0 20px;
  height: 250px;

  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

@media (min-width: 768px) {
  ul {
    margin-bottom: 0;
    padding-bottom: 0;
    margin-left: 70px;
  }
}

ul \> li {
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.15em;
}

ul > li:not(:first-child) {
  flex: 1;
}

h1 {
  font-weight: normal;
}

i {
  text-align: center;
  margin-right: 20px;
}
`;

const _ = {};
export default ({ hyper: { wire } }, state, emit) => {
  return wire(_, ':me')`
    <ul class=${styles.list}>
      <li>
        <h1>
          Douglas Duteil
        </h1>
      </li>
      <li>
        <i>${locationIcon(wire)}</i>
        <div>Paris, France</div>
      </li>
      <li>
        <i>${githubIcon(wire)}</i>
        <div>OneDoes Member</div>
      </li>
      <li>
        <i>${suitcaseIcon(wire)}</i>
        <div>Front End Developer at SFEIR Paris</div>
      </li>
    </ul>

    <style>${{ html: inlineStyle }}</style>
  `;
};
