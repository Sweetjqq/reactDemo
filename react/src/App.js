import React ,{Component}from 'react';
import './App.css';
import { Input,Button} from 'antd';
import ListItem from './item'
import store from './store/index'
import {add,delItem,getData} from './store/actionCreator'
import axios from 'axios'
class App extends Component{
  constructor(props){
    super(props);
    this.state=store.getState();
    this.add=this.add.bind(this);
    this.changeInputValue=this.changeInputValue.bind(this);
    this.delItem=this.delItem.bind(this);
    this.storeChange=this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  };
  render(){
    return (
      <div className="App">
          <div className="box">
            <span>增加菜单: </span>
            <Input 
              className="content" 
              value={this.state.inputValue} 
              onChange={this.changeInputValue}
              placeholder="请输入要添加的菜谱"
            />
            <Button type="primary" onClick={this.add}>添加</Button>
          </div>
          <ul>
            {
              this.state.listData.map((item,index)=>{
                return ( 
                  <ListItem 
                    index={index} 
                    key={index}  
                    content={item}
                    delItem={this.delItem}
                    avName="美女"
                    >
                  </ListItem>
                )
              })
            }
            
          </ul>   
      </div>
    );
  }
  /**
   * 订阅store
   */
  storeChange(){
    this.setState(store.getState());
  }
    /**
   * 
   * @param {*} e 改变输入框的值
   */
  changeInputValue(e){
    this.setState({
      inputValue:e.target.value
    })
  };
  /**
   * 添加某一项
   */
  add(){
    const action=add(this.state.inputValue);
    store.dispatch(action)
  };
/**
 * 
 * @param {*} index 序列号
 * 删除某一项
 */
  delItem(index){
    const action=delItem(index)
    store.dispatch(action)
  };

  /**
   * easy-mock获取假数据
   */
  getListData(){
    axios.get('https://www.easy-mock.com/mock/5ae94a6da825a96c45658b49/getList').then((res)=>{
      const data=res.data.data.list
      const action=getData(data);
      store.dispatch(action);
    })
  };
  componentDidMount(){
    this.getListData();
  }
};

export default App;
