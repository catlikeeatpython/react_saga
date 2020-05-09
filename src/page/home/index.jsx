import React, { Component } from 'react';
import { Button, Steps } from 'antd';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {get_Login} from '../../action/index';

const { Step } = Steps;

class Home extends Component {

  componentDidMount(){
    window.localStorage.setItem('isAuth',1)
  }

  handleBtn=()=>{
    const {get_Login} = this.props;
    console.log("aaa")
    let pay = 1
    get_Login(pay)
  }

  handleList=()=>{
    const {list} = this.props;
    console.log(list)
  }


  render() {
    return (
      <div className="container">
        <header className="header">购物车头部</header>
        <div className="content">购物车内容</div>
        <Button type="primary">primary</Button>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <button onClick={this.handleBtn}>点击</button>
        <button onClick={this.handleList}>点击</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.login.list,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    get_Login: bindActionCreators(get_Login, dispatch),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);