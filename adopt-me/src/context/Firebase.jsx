import {createContext,useContext,useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,} from 'firebase/auth';
import {getFirestore,collection,addDoc,getDocs,doc,getDoc,query,where} from 'firebase/firestore';
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage';


const FirebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyDgHkvONg4FqVhwstIwZD-7v9gIDI7PLaI",
    authDomain: "pet-adoption-d564c.firebaseapp.com",
    databaseURL: "https://pet-adoption-d564c-default-rtdb.firebaseio.com",
    projectId: "pet-adoption-d564c",
    storageBucket: "pet-adoption-d564c.appspot.com",
    messagingSenderId: "60526805632",
    appId: "1:60526805632:web:f378b277f7099bee585c65"
  };
export const useFirebase = () => useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
 const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export const FirebaseProvider = (props) =>{

     const [user,setUser] =useState(null);

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,user=>{
            if (user) setUser(user);
            else setUser(null);
        })
    },[])
      const signupUserWithEmailAndPassword =(email,password)=>createUserWithEmailAndPassword(firebaseAuth,email,password);
      const signinUserWithEmailAndPass = (email,password)=>signInWithEmailAndPassword(firebaseAuth,email,password);
      const signinWithGoogle = () =>signInWithPopup(firebaseAuth,googleProvider);
      const handleCreateNewListing = async(name,animal,address,city,state,zip,photo) =>{
          const imageRef = ref(storage,`uploads/images/${Date.now()}-${photo.name}`);
          const uploadResult= await uploadBytes(imageRef,photo);
          return await addDoc(collection(firestore,'pets'),{
            name,
            animal,
            address,
            city,
            state,
            zip,
            imageURL : uploadResult.ref.fullPath,
            userID : user.uid,
            userEmail : user.email,
            displayName: user.displayName,
            photoURL:user.photoURL,
          });
      };

      const logOut = () => {
        signOut(firebaseAuth);
      };

      const listAllPets = ()=>{
        return getDocs(collection(firestore,'pets'));
      };


      const getPetById = async(id)=>{
        const docRef = doc(firestore,'pets',id);
        const result = await getDoc(docRef);
        return result;
      }


      const getImageURL = (path) =>{
        return getDownloadURL(ref(storage,path));
      };

      const placeOrder = async(petId) =>{
        const collectionRef = collection(firestore,"pets",petId,"orders");
        const result = await addDoc(collectionRef,{
          userID : user.uid,
            userEmail : user.email,
            displayName: user.displayName,
            photoURL:user.photoURL,

        });
        return result;
      };

      const fetchMyPets = async(userId) =>{
        if(!user)return null;
        const collectionRef = collection(firestore,"pets");
        const q = query(collectionRef,where("userID","==",userId));
        const result = await getDocs(q);
        //  console.log("results of firebase");
        //  console.log(result);
        return result;
        
      }

      const fetchMyCats = async() =>{
        
        const collectionRef = collection(firestore,"pets");
        const q = query(collectionRef,where("animal","==","Cat"));
        const result = await getDocs(q);
        //  console.log("results of firebase");
        //  console.log(result);
        return result;
        
      }

      const fetchMyDogs = async() =>{
        
        const collectionRef = collection(firestore,"pets");
        const q = query(collectionRef,where("animal","==","Dog"));
        const result = await getDocs(q);
        //  console.log("results of firebase");
        //  console.log(result);
        return result;
        
      }

      const fetchMyAnimals = async() =>{
        
        const collectionRef = collection(firestore,"pets");
        const q = query(collectionRef,where("animal","not-in",['Dog', 'Cat','dog','cat']));
        const result = await getDocs(q);
        //  console.log("results of firebase");
        //  console.log(result);
        return result;
        
      }

      const fetchPetsByZip = async(zip) =>{
        
        const collectionRef = collection(firestore,"pets");
        const q = query(collectionRef,where("zip","==",zip));
        const result = await getDocs(q);
        //  console.log("results of firebase");
        //  console.log(result);
        return result;
        
      }

      const getOrders = async(petId)=>{
        const collectionRef = collection(firestore,"pets",petId,'orders');
        const result = await getDocs(collectionRef);
        return result;
      }


      const isLoggedIn = user ? true : false;
    return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPass,signinWithGoogle,handleCreateNewListing,isLoggedIn,listAllPets,getImageURL,getPetById,placeOrder,fetchMyPets,user,getOrders,logOut,fetchPetsByZip,fetchMyCats,fetchMyDogs,fetchMyAnimals,}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}