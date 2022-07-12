import React from 'react'
import { useState, useEffect } from "react"
import { Box, CssBaseline, TextField } from '@mui/material'
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
    const [search, setSearch] = useState('')
    const [filteredRow, setFilteredRow] = useState([])

    useEffect(() => {
        const getRows = async () => {
            const rowsFromServer = await fetchRow()
            setRows(rowsFromServer)
        }
        getRows()
    }, [])

    const filterRow = (text) => {
      const hold = []
      rows.forEach((row) => {if (row.project.includes(text.toUpperCase())) {
        hold.push(row)
      }})
      setFilteredRow(hold)
    }

    const fetchRow = async () => {
        const res = await fetch(raw)
        const xmlText = await res.text()
        const xml = await (new window.DOMParser()).parseFromString(xmlText, "text/xml")
        const json = xml2json(xml)

        return(json['granules']['granule'])      
    }

    const handleSearch = (text) => {
      setSearch(text)
      if (text.length >= 3) {
        filterRow(text)
      }
    }

    return(
        <div>
            <CssBaseline />
            <TopBar />
            <Box sx={{ width: '65%', p:1}} 
              display='flex' 
              justifyContent='right'
              margin = 'auto'
              >
                <TextField
                  variant='outlined'
                  id='searchField'
                  label= 'Search'
                  value={search} onChange={(event) => handleSearch(event.target.value)}
                />
            </Box>
            <main>
                <DataTable rows={search.length <= 2 ? rows : filteredRow}/>
            </main>
        </div>
    )
}

export default App