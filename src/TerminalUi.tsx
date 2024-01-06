import Terminal, {
  ColorMode,
  TerminalOutput,
} from '@chrome-bookmark-cli/react-terminal-ui';
import { useState } from 'react';

let test:string;

function onGot(bookmarkItems:any) {
  if (bookmarkItems.length) {
    console.log("active tab is bookmarked");
  } else {
    console.log("active tab is not bookmarked");
  }
  test = bookmarkItems.length;
}


function getID(terminalInput:string){
  console.log(`response: '${terminalInput}'`);
  chrome.bookmarks.search({}, onGot);
  return(
    <>
     {test} 
    </>
  );
}

export const TerminalUi = (props = {}) => {

  console.log(props);

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>,
  ]);

  console.log(props);
  console.log(setTerminalLineData);

  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className='container'>
      <Terminal
        height='500'
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) => {
          console.log(`New terminal input received: '${terminalInput}'`);
          setTerminalLineData([
            ...terminalLineData,
            <TerminalOutput>
              <a target='_blank' href='https://github.com'>
                {getID(terminalInput)}
              </a>
            </TerminalOutput>,
            <TerminalOutput>
              <div>{'Hello World'}</div>
            </TerminalOutput>,
          ]);
        }}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};