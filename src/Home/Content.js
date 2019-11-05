import React, { Component } from 'react'

export default class Content extends Component{
    constructor(){
        super();
        this.state = {
            data:{
                author:{}
            }
        }
    }
    componentDidMount() {
        let page = this.props.match.params.id;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+page)   
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data:res.data
                    })
                })
        }
    }
    render() {
        return (
            <div>
                <div className='panel'>
                    <div className='topic_header'>
                        <span className='topic_full_title'>
                            <span className='put_top'>置顶</span>
                                {this.state.data.title}
                        </span>
                        <div className='changes'>
                            <span className='add_change'>发布于6个月前</span>
                            <span className='add_change'>作者{this.state.data.author.loginname}</span>
                            <span className='add_change'>{this.state.data.visit_count}次浏览</span>
                            <span className='add_change'>来自分享</span>
                        </div>
                    </div>
                    <div className='topic_content'>
                        <div className='markdown-text' dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    </div>
                </div>
            </div>
        );
    }
}