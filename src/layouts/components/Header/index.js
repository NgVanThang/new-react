import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function Header() {
  return (
    <Tippy content="header">
      <h1>Header</h1>
    </Tippy>
  );
}

export default Header;
