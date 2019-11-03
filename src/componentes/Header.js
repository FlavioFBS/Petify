import React from 'react'
import Proptypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1 className="text-center">{props.titulo}</h1>
    </header>
  )
}

Header.prototype = {
  //obligar que se le pase ese dato
  titulo: Proptypes.string.isRequired
}
export default Header

