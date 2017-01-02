import React from 'react';
import fetch from '../../core/fetch';
import { Modal, Button, Col, Row } from 'antd';
import { setAction } from '../Actions'

const AM = React.createClass({
  getInitialState() {
    return {
      ModalText: 'loading',
      visible: false,
      loading: true
    };
  },
  showModal(item, time) {
    this.setState({
      visible: true,
    });
    this.setState({ ...this.state, loading: true, ModalText: item._id, data: [] })
    this.loadMails(item._id, time)
  },
  closeModal() {
    this.setState({
      visible: false
    })
  },
  componentWillMount() {
    setAction(this.showModal)
  },

  loadMails(keyword, time) {
    fetch('/count' + '?keyword=' + keyword + '&time=' + time, {
      method: 'get'
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      this.setState({
        ...this.state, loading: false, data: data.data.map(
          d => ({
            key: d.id,
            subject: d.subject,
            sent: d.date_sent
          })
        )
      })
    })

  },
  render() {
    return (
      <div>
        <Modal title={this.state.ModalText}
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
          >{
            (this.state.loading) ?
              <p>{"loading " + this.state.ModalText}</p> :
              this.state.data.map(d => (
                <Row>
                  <Col>{d.subject}</Col>
                  <Col>{d.sent}</Col>
                </Row>
              ))
          }
        </Modal>
      </div>
    );
  },
});

export default (AM);
