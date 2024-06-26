import React from 'react';
import GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.css"


import { useRef } from 'react';

import './spread.css';

// GC.Spread.Sheets.LicenseKey = "ext-crisil.com,E848192468161667#B1JRRa096SXZFOtJXc6czLzgUR5gHeyh6QtFFZxA7MO9Ubwk6cHVkSwhWZGx4KmFle5NUY7NHVoZjMm56UyRTVThWbZJEbzA7SwpnWKZ6TjZldYxWaRlVUQhzUrM4Ts3CbQNGW7ZFNkd4cnVzNVVVc8cDVvZTTHlmaZJDbBVGO9QVV9NzVUVmZplXNKJUbxYXQKVlWQVkTBhDc8h4UkRmaJJDMwcDU4QEMzQGcWd5M0JnMwwENGFUVyA5RwVUMDh7UoNGdZ54Yn3UaKF7LjhXRJ5mdzlTaid7K4Z5QtlEd42yZPRmb7RXYnZ7MTNlT8YEcEBlI0IyUiwiIGFjQxUTRwUjI0ICSiwCN6cTO7QTNxMTM0IicfJye35XX3JSVBtUUiojIDJCLicTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiI8UzNzETMggTM6ADNyAjMiojI4J7QiwiI8EzNwQjMwIjI0ICc8VkIsISbvNmLsl6cpJ7YtQHelJiOiEmTDJCLlVnc4pjIsZXRiwiI7YjNxYTM8YDNykTM8QDOiojIklkIs4XXbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZ8hWVK5UV03kZyUld8I5bXJma8pnZmFDWzo6cv4WeSBDMiRzRJlWNINlZHJVUsVTakpUe55kahllZ7FWN9kHR8MEb456VEFWZQRjWFN7ZXtkQihFeP3yZCl5N0tkSap7c37oS";
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
          <p>hello change</p>
          <SpreadSheets workbookInitialized={spread => initSpread(spread)}>
            <Worksheet></Worksheet>
          </SpreadSheets>
        </div>
      </div>
  );
};
