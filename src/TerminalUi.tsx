import Terminal, { ColorMode, TerminalOutput } from '@hk-pg/react-terminal-ui';
import { useState } from 'react';

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
                github
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
