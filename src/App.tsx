import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>hello </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >wu</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >lei</Button>
      </header>
    </div>
  );
}

export default App;
