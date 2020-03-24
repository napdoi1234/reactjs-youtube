import React from 'react';
import Header from './components/header';
import MessageContainer from './containers/MessageContainer'
import Footer from './components/footer'
import CartContainer from './containers/CartContainer'
import ProductContainer from './containers/ProductContainer';
function App() {
    return (
        <div>
            <Header />
            <main id="mainContainer">
                <div className="container">
                    <ProductContainer />
                    <MessageContainer/>
                    <CartContainer />
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
