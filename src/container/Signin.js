import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Signin extends Component {
    render() {
        return (
            <div>
                <div className='panel'>
                    <div className='login_header'>
                        <ul className='breadcrumb'>
                            <span className='ma'>主页</span>
                            <span className='divider'>/</span>
                            <span className='act'>登录</span>
                        </ul>
                    </div>
                    <div className='login_inner'>
                        <form className='form-horizontal' action='/signin' method='post'>
                            <div className='control-group'>
                                <label className='control-label'>用户名</label>
                                <div className='controls'>
                                    <input className='input-xlarge' name='name' type='text'/>
                                </div>
                            </div>
                            <div className='control-group'>
                                <label className='control-label'>密码</label>
                                <div className='controls'>
                                    <input className='input-xlarge' name='pass' type='password'/>
                                </div>
                            </div>
                            <div className='form-actions'>
                                <Link type='submit' className='span-info' to='/home/all/1'>登录</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
