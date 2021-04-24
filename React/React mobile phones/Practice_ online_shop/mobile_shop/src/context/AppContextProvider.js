import React from 'react';
import { AppContext } from './app-context';

export default class AppContextProvider extends React.Component {
    state = {
        products: getAllProducts(),
        cart: [],
        total: 0
    }

    addToCart = (id) => {
        const product = this.state.products.find(p => p.id === id);
        const index = this.state.cart.findIndex(p => p.id === id);
        const cart = [...this.state.cart];
        if (index < 0) {
            cart.push({
                id: product.id,
                description: `${product.manufacture} - ${product.model}`,
                price: product.price,
                count: 1
            })
        }
        else {
            cart[index] = { ...cart[index], count: cart[index].count + 1 }
        }
        console.log(this.state.cart);
        this.setState({ ...this.state, cart: cart, total: this.state.total + product.price })

    }

    /*
    removeFromCart = (id) => {
        const product = this.state.cart.find(p => p.id === id);
        if (product.count === 1) {
            const cart = this.state.cart.filter(p => p.id === id);
            this.setState({ ...this.state, cart: cart, total: this.state.total - product.price })
        } else {
            const index = this.state.cart.findIndex(p => p.id === id);
            const cart = [...this.state.cart];
            cart[index] = { ...product, count: product.count - 1 };
            this.setState({ ...this.state, cart: cart, total: this.state.total - product.price });
        }
    }
    */

    removeFromCart = (id) => {
        const product = this.state.cart.find(p => p.id === id);
        const cartTmp = [...this.state.cart];
        const index = this.state.cart.findIndex(p => p.id === id);
        if(product.count === 1){
            cartTmp.splice(index, 1);
            this.setState({...this.state, cart: [...cartTmp], total: this.state.total - product.price})
        } else {
            cartTmp[index] = { ...product, count: product.count - 1 };
            this.setState({ ...this.state, cart: cartTmp, total: this.state.total - product.price });
        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                products: this.state.products,
                cart: this.state.cart,
                addToCart: this.addToCart,
                total: this.state.total,
                removeFromCart: this.removeFromCart
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

function getAllProducts() {
    return JSON.parse(
        `
    [
        {
            "id": 101,
            "manufacture": "Blackberry",
            "model": "9650",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 130,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111593/phones_croped/blackberry-9650.png"
        },
        {
            "id": 102,
            "manufacture": "Ericsson",
            "model": "T65",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 80,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603114461/phones_croped/ericsson-t65.png"
        },
        {
            "id": 103,
            "manufacture": "Nokia",
            "model": "5210",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 95,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-5210.png"
        },
        {
            "id": 104,
            "manufacture": "Nokia",
            "model": "E63",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 70,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-e63.png"
        },
        {
            "id": 105,
            "manufacture": "Nokia",
            "model": "6300",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 110,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/nokia-6300.png"
        },
        {
            "id": 106,
            "manufacture": "Siemens",
            "model": "A50",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 80,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111592/phones_croped/siemens-a50.png"
        },
        {
            "id": 107,
            "manufacture": "Sony Ericsson",
            "model": "W710i",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 95,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/sony-ericsson-w710i.png"
        },
        {
            "id": 108,
            "manufacture": "Motorola",
            "model": "Razr V3i",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 90,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/motorola-razr-v3i.png"
        },
        {
            "id": 109,
            "manufacture": "Nokia",
            "model": "E5",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 115,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/nokia-e5.png"
        },
        {
            "id": 110,
            "manufacture": "Motorola",
            "model": "E398",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 75,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/motorola-e398.png"
        },
        {
            "id": 111,
            "manufacture": "Ericsson",
            "model": "T20s",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 75,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/ericsson-t20s.png"
        },
        {
            "id": 112,
            "manufacture": "Nokia",
            "model": "6310i",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec turpis eget nisl vehicula dapibus. Phasellus euismod ligula euismod odio pulvinar pellentesque. Donec vel dui imperdiet, ultricies dolor eu, ullamcorper erat. Donec sit amet tortor nulla. In et metus nec justo mattis dignissim sed a ante. Phasellus elementum, odio at efficitur consectetur, neque orci euismod justo, eu tincidunt sem urna vel magna. Aenean facilisis accumsan diam, quis dictum ante euismod vel. Aliquam et massa ante. Praesent vitae leo id metus commodo bibendum in nec quam. Phasellus faucibus, sem vel varius vulputate, ex justo cursus diam, at fringilla massa ex sit amet sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque faucibus purus purus, ut dapibus odio feugiat non. Cras varius eu urna quis egestas.",
            "price": 80,
            "url": "https://res.cloudinary.com/sheygam/image/upload/v1603111591/phones_croped/nokia-6310i.png"
        }
    ]
    `
    )
}