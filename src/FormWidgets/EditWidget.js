import React from 'react'
import FormNumberBox from './FormNumberBox'
import FormGauge from './FormGauge'
// import FormGaugeSpeed from './FormGaugeSpeed'
import FormImage from './FormImage'
import FormImageCover from './FormImageCover'
import FormProgressBar from './FormProgressBar'
import FormText from './FormText'
import FormList from './FormList'
import FormChart from './FormChart'
import FormButton from './FormButton'
import FormToggle from './FormToggle'
import FormMap from './FormMap'
import FormLed from './FormLed'
import FormHtml from './FormHtml'
import FormTable from './FormTable'
import GaugeImg from '../assets/widgets/Gauge.png'
import ButtonImg from '../assets/widgets/Button.png'
import ChartImg from '../assets/widgets/Chart.png'
import CoverImg from '../assets/widgets/Cover.png'
import HTMLImg from '../assets/widgets/HTML.png'
import ImageImg from '../assets/widgets/Image.png'
import LedImg from '../assets/widgets/Led.png'
import ListImg from '../assets/widgets/List.png'
import MapImg from '../assets/widgets/Map.png'
import NumberBoxImg from '../assets/widgets/NumberBox.png'
import ProgressBarImg from '../assets/widgets/ProgressBar.png'
import TextImg from '../assets/widgets/Text.png'
import ToggleImg from '../assets/widgets/Toggle.png'
import TableImg from '../assets/widgets/Table.jpg'

import { observer } from 'mobx-react'

@observer
class EditWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectType: "NumberBox"
    }
  }
  selectWidget = (e) => {
    this.setState({
      selectType: e.target.name
    })
  }
  componentWillReceiveProps(nextProps) {
    let editWidget = nextProps.editWidget
    if (editWidget.typeWidget) {
      this.setState({
        selectType: editWidget.typeWidget
      })
    }
  }
  render() {
    let editWidget = this.props.editWidget
    return (
      <div className="row">
        {(editWidget.typeWidget) ? '' : <WidgetsList selectWidget={this.selectWidget} />}
        <div className={(editWidget.typeWidget) ? "col-12 formWidget" : "col-sm-9 col-12 formWidget"} id="scrollbar-style">
          <strong>Form</strong>
          <form>
            <SelectType selectType={this.state.selectType} editWidget={editWidget} />
          </form>
        </div>
      </div>
    )
  }
}

class SelectType extends React.Component {
  render() {
    let editWidget = this.props.editWidget
    const { selectType } = this.props
    switch (selectType) {
      case 'NumberBox':
        return <FormNumberBox editWidget={editWidget} />
      case 'Gauge':
        return <FormGauge editWidget={editWidget} />
      case 'Image':
        return <FormImage editWidget={editWidget} />
      case 'ImageCover':
        return <FormImageCover editWidget={editWidget} />
      case 'ProgressBar':
        return <FormProgressBar editWidget={editWidget} />
      case 'Text':
        return <FormText editWidget={editWidget} />
      case 'List':
        return <FormList editWidget={editWidget} />
      case 'Chart':
        return <FormChart editWidget={editWidget} />
      case 'Button':
        return <FormButton editWidget={editWidget} />
      case 'Toggle':
        return <FormToggle editWidget={editWidget} />
      case 'Map':
        return <FormMap editWidget={editWidget} />
      case 'Led':
        return <FormLed editWidget={editWidget} />
      case 'HTML':
        return <FormHtml editWidget={editWidget} />
      case 'Table':
        return <FormTable editWidget={editWidget} />
      default:
        return <h1>Please select widget</h1>
    }
  }
}

class WidgetsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      widgets: [
        {
          name: "NumberBox",
          img: NumberBoxImg
        },
        {
          name: "Gauge",
          img: GaugeImg
        },
        {
          name: "ProgressBar",
          img: ProgressBarImg
        },
        {
          name: "Image",
          img: ImageImg
        },
        {
          name: "ImageCover",
          img: CoverImg
        },
        {
          name: "Chart",
          img: ChartImg
        },
        {
          name: "List",
          img: ListImg
        },
        {
          name: "Text",
          img: TextImg
        },
        {
          name: "Button",
          img: ButtonImg
        },
        {
          name: "Toggle",
          img: ToggleImg
        },
        {
          name: "Map",
          img: MapImg
        },
        {
          name: "Led",
          img: LedImg
        }
        ,
        {
          name: "HTML",
          img: HTMLImg
        },
        {
          name: "Table",
          img: TableImg
        }
      ],
      selectType: "NumberBox"
    }
  }
  selectWidget = (e) => {
    this.setState({
      selectType: e.target.name
    })
    this.props.selectWidget(e)
  }
  render() {
    // const boardId = this.props.match.params.boardId
    let listWidget = this.state.widgets.map((widget, index) => {
      var tmp =
        <button key={index} 
          onClick={this.selectWidget}
          name={widget.name}
          className={(this.state.selectType === widget.name) ? 'listwid active border-0 rounded p-2' : 'listwid border-0 rounded p-2'}>
          <span>
          <img className="img-thumbnail border-0"
            src={widget.img}
            
            alt=""
            
          />
          </span>
          <span><figcaption className="figure-caption text-center">{widget.name}</figcaption></span>
          

        </button>
      return tmp
    })
    return (
      <div className="col-sm-3 col-12 border-right listWidgets " data-spy="scroll" id="scrollbar-style">
        <p><strong>Widget</strong></p>
        {listWidget}
      </div>
    )
  }
}

export default EditWidget
