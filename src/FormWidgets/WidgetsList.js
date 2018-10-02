import React from 'react'
import FormCardBox from './FormCardBox'

class WidgetsList extends React.Component {

  addMachine = () => {
    let payload = {
      machineName: this.state.machineName,
      machineType: this.state.machineType
    }
    this.setState({
      machineName: '',
      machineType: 'A'
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      widgets: [
        {
          name: "CardBox",
          img: "https://i.stack.imgur.com/k7Nit.png"
        },
        {
          name: "progress",
          img: "https://image.opencart.com/cache/583c1e869b365-resize-710x380.jpg"
        },
        {
          name: "graph",
          img: "https://www.excel-easy.com/examples/images/line-chart/line-chart.png"
        },
      ],
      selectType: 0
    }
  }
  selectWidget(e) {
    console.log(e.target.name)
    this.setState({
      selectType: e.target.name
    })
  }
  render() {
    // const boardId = this.props.match.params.boardId
    let listWidget = this.state.widgets.map((widget, index) => {
      var tmp =
        <div key={index} className={(this.state.selectType === widget.name) ? 'border border-primary p-1' : 'p-1'}>
          <img className="img-thumbnail text-right"
            src={widget.img}
            name={widget.name}
            alt=""
            onClick={this.selectWidget.bind(this)}
          />
          <figcaption className="figure-caption">{widget.name}</figcaption>
          
        </div>
      return tmp
    })
    return (
      <div className="row">
        <div className="col-3">
          {listWidget}
        </div>
        <div className="col-9">
          <SelectType selectType={this.state.selectType} />
        </div>
      </div>
    )
  }
}

class SelectType extends React.Component {
  render() {
    const {selectType, boardId} = this.props
    switch (selectType) {
      case 'CardBox':
        return <FormCardBox />
      default:
        return <h1>Error</h1>
    }
  }
}

export default WidgetsList