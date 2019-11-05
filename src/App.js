import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route,Switch,Redirect}from 'react-router-dom'
import About from "./container/About";
import Api from "./container/Api";
import Start from "./container/Start";
import Home from "./container/Home";
import Content from '../src/Home/Content';
import Signin from './container/Signin';
export default class App extends Component {
    render() {
        return (
            <Router basename='build'>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className='left'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from='/' to='/home/all/1'/>}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route  path='/content/:id' component={Content}/>
                            <Route path='/signin' component={Signin}/>
                        </Switch>
                    </div>
                    <div className='right'>
                        <h4 style={{margin:'100px 20px 0'}}>CNode：Node.js专业中文社区</h4>
                        <div style={{textAlign:'center',marginTop:'20px'}}>了解一下</div>
                    </div>
                   
                </div>
            </Router>
        )
    }
}

