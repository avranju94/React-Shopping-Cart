import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import { Button } from 'reactstrap';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        alert('item removed from cart!');
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    handleDummyButton(){
        alert('Sorry, this is a dummy button!');
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: Rs{(item.price)*(item.quantity)}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart" id="float-left"><span className="fa fa-plus" onClick={()=>{this.handleAddQuantity(item.id)}}></span></Link>
                                            <Link to="/cart" id="float-right"><span className="fa fa-minus" onClick={()=>{this.handleSubtractQuantity(item.id)}}></span></Link>
                                        </div>
                                        <p>
                                        <Button color="warning" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
                                        </p>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                {(this.props.total) === 0 ?
                <div></div>
                :
                <div>
                 <p className="collection-item"><b>Total amount to be paid: Rs{this.props.total}</b></p>
                 <Button color="warning" onClick={()=>{this.handleDummyButton()}}>Checkout</Button>   
                </div>
                }
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
         total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)