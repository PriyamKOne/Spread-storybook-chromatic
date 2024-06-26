import React from 'react';
import GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.css"


import { useRef } from 'react';

import './spread.css';

GC.Spread.Sheets.LicenseKey = "www.chromatic.com,E458613569419471#B1uNTRxQnRaFnUkBneNJUeqNVUidzNMxGRPJTb6BTUMdkSFRkV62kVaBTb48kaEJ4Q7cnMD3WYsxkS9hEc53iM8U4STl4SLpma4YXT9JUTolkMkdmbvIHbIdFV5AzaHZ4Z6MmeEBnQrQDczgGa93WQK3UUhBzZnJGM0J7YzdHdllUYvdVUThlMItyaYdUMkJTYx9mUrgWRaJHNjp7SGpVaMljasREUEdldrUVbElmdwN4S4pVQoZFVv56N5cne7U5VaF6VElXcFp4RpRzTLlGevFVWzs6K7s4KPxGSyN4VDZFTRJDRiJkNxA5MEN4bqRGbYNWdQVmNxpUVVRHc8AXdQBTVCFVTOl7KoJiOiMlIsISR8EEODJ4QxIiOigkIskDOxYTO7gjN0IicfJye#4Xfd5nIXR5QaJiOiMkIsIiNx8idgMlSgQWYlJHcTJiOi8kI1tlOiQmcQJCLiYDMyQTMxAiNyYDM4IDMyIiOiQncDJCLiMDM7ADNyAjMiojIwhXRiwiIt36YuMWa4FWbvJHaj9yd7dnI0IyctRkIsICZlRXatlGTgUGdhZXayBFIhlGZulEI9RXajVGchJ7RiojIh94QiwSZ5JHd0ICb6VkIsISM7QTOxQTO6UzMxYDO5QjI0ICZJJCL355W0IyZsZmIsU6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3EkR0R7TWN7ZqBlS5U6Ko3iS9pHTWJjNwJWOyQzSzEndJxEdPBTMshGWvRmWBRHajJmbhRHdvhVU8h7KPpWbIZmSlpWeZF5R6wmdKQRU";

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
          <p>hello changee</p>
          <SpreadSheets workbookInitialized={spread => initSpread(spread)}>
            <Worksheet></Worksheet>
          </SpreadSheets>
        </div>
      </div>
  );
};
