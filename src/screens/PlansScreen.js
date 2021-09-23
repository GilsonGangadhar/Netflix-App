import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import "./PlansScreen.css";
import { loadStripe } from '@stripe/stripe-js'

function PlansScreen() {

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        db.collection('products').where('active', '==', true).get()
        .then((querySnapshot) => {
            const products = {}
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach(price =>{
                    products[productDoc.id].prices = {
                        priceId : price.data()
                    }
                })
            })
            setProducts(products)
        })
    }, [])


    const loadCheckout = async (priceId) => {

        const docRef =  await db.collection("customers").doc(user.uid).collection("checkout_sessions").add({
            price : priceId,
            success_url : window.location.origin, 
            cancel_url : window.location.origin
        })

    
    docRef.onSnapshot(async(snap) => {
        const { error, sessionId } = snap.data()

        if(error) {
            alert(`an error occured : ${error.message}`)
        }

        if(sessionId){
            //it redirects to checkout

            const stripe = await loadStripe('pk_test_51JcprgSJkRbIPmLKePzsPnCLTt9scF3EfGrDtLSD0JSju3w8UhmWr7bWcs7jmfDpyxPd249d5dhGx6cNm5Xk3rBi001b2vm1Lh')

            stripe.redirectToCheckout({sessionId})
        }
    })
    };

    // console.log(Object.entries(products), "products")
    // console.log(productData.prices.priceId)

    return (
        <div className="plansScreen" >
            {Object.entries(products).map(([productId, productData]) => {
                //add some logic to check if the user subscribtion is active...
                console.log(productData.prices, "priceId")
                return (
                    <div className="plansScreen_plan" >
                        <div className="plansScreen_Info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productData.prices.priceId)} >Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen
