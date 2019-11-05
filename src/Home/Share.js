import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom';

export default class All extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log(this.props.match.params.id)

        fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page)   
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
                <div id='topic_list'>
                    {
                        this.state.data.map((item)=>(
                            <div key={item.id} className='cell'>
                                <img src={item.author.avatar_url} style={{float:'left',width:'30px',height:'30px',borderRadius:'3px',verticalAlign: 'middle'}}/>
                                <span className='reply_count pull_left' >
                                    <span className='count_of_replies'>{item.reply_count}</span>
                                    <span className="count_seperator">/</span>
                                    <span className='count_of_visits'>{item.visit_count}</span>
                                </span>
                                <div className='topic_title_wrapper'>
                                    <span className='put_top'>置顶</span>
                                    <span className='topic_title'>
                                        <Link className='link_title' to={'/content/'+item.id} >{item.title}</Link>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='pagination'>
                    <ul>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item} style={{float:'left',listStyleType:'none'}}>
                                <NavLink className='btn' to={'/home/share/'+item}>{item}</NavLink>
                            </li>
                        ))
                     }
                    </ul>
                </div> 
            </div>
        )
    }
}