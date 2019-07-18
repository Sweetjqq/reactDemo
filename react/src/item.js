import React, { Component } from 'react';
import PropType from 'prop-types'
class ListItem extends Component {
   constructor(props){
       super(props)
       this.handleClick=this.handleClick.bind(this);
   }
    render() { 
        return ( 
            <li 
                onClick={this.handleClick}>
                {this.props.avName}--喜欢做**
                {this.props.content}
            </li>
         );
    }
    /**
     * 调用父组件的方法
     */
    handleClick(){
        this.props.delItem(this.props.index);
    }
    /**
     * 
     * @param {*} nextProps 即将变化的属性
     * @param {*} nextState 即将变化的状态
     */
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
}
ListItem.propTypes={
    content:PropType.string,
    delItem:PropType.func,
    index:PropType.number,
    avName:PropType.string.isRequired
} 
ListItem.defaultProps={
    avName:"孙大厨"
}
export default ListItem;