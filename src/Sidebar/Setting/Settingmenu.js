import React, { Component } from 'react'
import './Settingmenu.css'
import DataSource from './DataSource.js'
import ColorSetting from './ColorSetting.js'
class Settingmenu extends Component {
  render() {
    const mode = this.props.mode
    return (
      <div className={(mode)? 'false': 'd-none'}>
        <ul className="list-unstyled components">
          <DataSource/>
        </ul>
        <ul className="list-unstyled components">
          <ColorSetting />
        </ul>
        
      </div>
    )
  }
}

export default Settingmenu
