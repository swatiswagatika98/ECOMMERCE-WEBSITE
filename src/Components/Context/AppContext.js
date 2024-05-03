import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth, db } from '../../Firebase';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const productsArr = [
      {
        id: 1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id: 2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id: 3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id: 4,
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ];

    const [cartArr, setCartArr] = useState([]);
    const [portal, setPortal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [user, setUser] = useState(null);

    const user1 = auth.currentUser;

  useEffect(() => {
  if (cartArr.length === 0) {
    setTotalPrice(0);
  } else {
    const totalPriceSum = cartArr.reduce((accumulator, data) => accumulator + data.price, 0);
    setTotalPrice(totalPriceSum);
  }
}, [cartArr]);


    const addHandler = async (id) => {
        const arr = productsArr.find((product) => product.id === id);

        // Check if the user is authenticated
        if (user1) {
            try {
                const cartRef = doc(db, 'userdata', user1.uid);
                const cartSnapshot = await getDoc(cartRef);
                if (cartSnapshot.exists()) {
                    const userData = cartSnapshot.data();
                    const existingCart = userData.cart || [];
                    const duplicate = existingCart.find((item) => item.id === id);
                    if (duplicate) {
                        alert('Already added to cart');
                    } else {
                        const updatedCart = [...existingCart, arr];
                        await setDoc(cartRef, { cart: updatedCart });
                        alert("Item added to cart");
                    }
                } else {
                    await setDoc(cartRef, { cart: [arr] });
                    alert("Item added to cart");
                }
            } catch (err) {
                alert("Error adding item to cart: " + err.message);
            }
        } else {
            alert("Please login to add items to the cart.");
        }
    };

    useEffect(() => {
        if (user1) {
            const cartRef = doc(db, 'userdata', user1.uid);
            const unsubscribe = onSnapshot(cartRef, (docSnap) => {
                if (docSnap.exists()) {
                    setCartArr(docSnap.data().cart || []);
                } else {
                    setCartArr([]);
                }
            });

            return () => unsubscribe(); // Cleanup the listener when the component unmounts
        }
    }, [user1]);

    const removeHandler = async (id) => {
        const filteredArr = cartArr.filter((item) => item.id !== id);
        const cartRef = doc(db, 'userdata', user1.uid);
        const updatedCart = [...filteredArr];
        await setDoc(cartRef, { cart: updatedCart });
        alert("Item removed successfully");
    };

    const clearCart = async () => {
      const cartRef = doc(db, 'userdata', user1.uid);
      await setDoc(cartRef, { cart: [] });
      alert("Thanks for the purchase");
    };

    const value = {
        productsArr,
        addHandler,
        cartArr,
        portal,
        setPortal,
        removeHandler,
        totalPrice,
        clearCart,
        user,
        setUser
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}
