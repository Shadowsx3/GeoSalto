import React, { useState, useEffect } from 'react'
import {
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItem,
} from '@mui/material'
import { FixedSizeList } from 'react-window'
import './Categoria.scss'

const Categoria = () => {
  const category = JSON.parse(localStorage.getItem('categoryRecords'))
  const [checked, setChecked] = React.useState([])
  useEffect(() => {
    const categorychecked = JSON.parse(localStorage.getItem('categorychecked'))
    if (categorychecked) {
      setChecked(categorychecked)
    }
  }, [])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    localStorage.setItem('categorychecked', JSON.stringify(newChecked))
    setChecked(newChecked)
  }
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItemButton onClick={handleToggle(category[index])} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(category[index]) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          id={'ListItemText-${category[value]}'}
          primary={category[index]}
        />
      </ListItemButton>
    </div>
  )
  return (
    <FixedSizeList
      height={440}
      width={180}
      itemSize={46}
      itemCount={category.length}
    >
      {Row}
    </FixedSizeList>
  )
}

export default Categoria
