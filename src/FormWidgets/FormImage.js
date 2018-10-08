import React from 'react'
import WidgetStore from '../store/WidgetStore'
import FormInputBasic from './Input/FormInputBasic'
import Store from '../store/Store'

class FormImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Image',
      file: 'empty',
      datasource: '',
      filter: '',
      filterIndex: 0
    }
    this.handlePayload = this.handlePayload.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handlePayload(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFile(e) {
    if (e.target.files && e.target.files[0]) {

      var FR = new FileReader()
      FR.onloadend = () => {
        document.getElementById("b64").src = FR.result
        this.setState({
          file: FR.result
        })
      }
      FR.readAsDataURL(e.target.files[0])
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let payload = {
      typeWidget: 'Image',
      title: this.state.title,
      file: this.state.file,
      datasource: this.state.datasource,
      filter: this.state.filter,
      filterIndex: this.state.filterIndex
    }
    WidgetStore.createWidget(Store.currentId, payload)
    this.setState({
      title: 'Image',
      file: 'empty',
      datasource: '',
      filter: '',
      filterIndex: 0
    })
    document.getElementById('b64').src = ''
  }
  render() {
    const payload = this.state
    return (
      <div className="FormProgressBar container">
        <form >
          <FormInputBasic callback={this.handlePayload} values={payload} />
          <div className="form-group row">
            <label htmlFor="file" className="col-3 col-form-label">
              File :
          </label>
            <div className="col-9">
              <input id="uploadImg"
                name="path"
                type="file"
                className="form-control-file"
                onChange={this.handleFile}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <img src="" id="b64" height={250} alt="" />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button"
                className="btn btn-primary border-0"
                onClick={this.handleSubmit.bind(this)}
                data-dismiss="modal" aria-label="Close"
              ><i className="fas fa-plus-square"></i> Add widget</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormImage