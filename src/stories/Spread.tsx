import React from 'react';
import GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.css"

import { useRef } from 'react';

import './spread.css';

type User = {
  name: string;
};

export const Spread: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  let spreadref = useRef(new GC.Spread.Sheets.Workbook());

  function initSpread(spread: GC.Spread.Sheets.Workbook) {
    spreadref.current = spread;
    const sheet = spread.getActiveSheet();

    // debugging
    (window as any)["GC"] = GC;
    (window as any)["spread"] = spread
  }

  return (

      <div className="sample-tutorial">
        <div className="sample-spreadsheets">
          <SpreadSheets workbookInitialized={spread => initSpread(spread)}>
            <Worksheet></Worksheet>
            <Worksheet></Worksheet>
            <Worksheet></Worksheet>
          </SpreadSheets>
          <p>hello chnagde</p>
        </div>
      </div>
  );
};
