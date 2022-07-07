import React from 'react'
import { useState, useEffect } from "react"
import { CssBaseline } from '@mui/material'
import TopBar from './components/TopBar'
import DataTable from './components/DataTable'
import raw from './sample.xml'

function xml2json(xml) {
    try {
      var obj = {};
      if (xml.children.length > 0) {
        for (var i = 0; i < xml.children.length; i++) {
          var item = xml.children.item(i);
          var nodeName = item.nodeName;
  
          if (typeof (obj[nodeName]) == "undefined") {
            obj[nodeName] = xml2json(item);
          } else {
            if (typeof (obj[nodeName].push) == "undefined") {
              var old = obj[nodeName];
  
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xml2json(item));
          }
        }
      } else {
        obj = xml.textContent;
      }
      return obj;
    } catch (e) {
        console.log(e.message);
    }
  }

const App = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const getRows = async () => {
            const rowsFromServer = await fetchRow()
            setRows(rowsFromServer)
        }
        getRows()
    }, [])

    const fetchRow = async () => {
        const res = await fetch(raw)
        const xmlText = await res.text()
        const xml = await (new window.DOMParser()).parseFromString(xmlText, "text/xml")
        const json = xml2json(xml)

        return(json['granules']['granule'])      
    }

    return(
        <div>
            <CssBaseline />
            <TopBar />
            <main>
                <DataTable rows={rows}/>
            </main>
        </div>
    )
}

export default App