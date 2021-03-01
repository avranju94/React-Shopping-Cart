import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Button, Badge } from 'reactstrap';


class Home extends Component{
	 handleClick = (id)=>{
	 	alert('Item added to cart!');
        this.props.addToCart(id); 
    }

    render(){
    	console.log('hello');
    	console.log(this.props.items);
    	let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            {item.offerprice?
                            <p>Price: <del>Rs{item.price}</del><b> <ins>Rs{item.offerprice}</ins> <Badge color="danger"> Only for limited time.</Badge></b></p>
                            :
                            <p><b>Price: Rs{item.price}</b></p>
                             }
                        </div>
                        <div className="add-to-cart">
                         <Button color="primary" onClick={()=>{this.handleClick(item.id)}}>Add to Cart</Button>
                        </div>
                 </div>
            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
        
}    

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)