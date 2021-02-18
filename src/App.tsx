import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import SubMenu from './components/Menu/subMenu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee}/>
      <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}>
        <MenuItem>
          wu
        </MenuItem>
        <MenuItem>
          lei
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            1
          </MenuItem>
          <MenuItem>
            2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          ya
        </MenuItem>
      </Menu>
      <header className="App-header">
        <Button autoFocus>hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >wu</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >lei</Button>
      </header>
    </div>
  );
}

export default App;
