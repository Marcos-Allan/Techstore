'use client'
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";
import '@/app/utils/firebase.js'

export default function Message() {

    const auth = getAuth();

    const provider = new GoogleAuthProvider();

    function login(){
        signInWithRedirect(auth, provider)
        .then((result) => {
            const cred = GoogleAuthProvider.credentialFromResult(result)
            console.log(cred)
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/auth.user
                  const uid = user.uid;
                  console.log(user.displayName)
                  console.log(user.email)
                  console.log(user.photoURL)
                  // ...
                } else {
                  // User is signed out
                  // ...
                }
              });
        })
      .catch((error) => {
        console.log(error)
      });
    }

    function logout(){
        signOut(auth)
        console.log('LOGOUT')
    }

   return (
        <div
            className="fixed bottom-4 bg-h-white-200 h-auto opacity-90 w-10/12 p-4 overflow-hidden rounded-[8px] pb-[100px] border-[1px] border-solid border-h-gray-300"
        >
            <p
                className="text-black text-center"
            >Parece que você ainda não fez login, faça para aproveitar o maximo possivel dos dados</p>
            <div
                onClick={() => login()}
                className="absolute w-full bottom-[50px] left-0 bg-h-gray-300 flex items-center py-2 justify-center h-[46px] hover:opacity-70 transition-opacity"
            >
                <p
                    className="text-center"
                >
                    Fazer Login
                </p>
            </div>
            <div
                onClick={() => logout()}
                className="absolute w-full bottom-0 left-0 bg-h-gray-300 flex items-center py-2 justify-center h-[46px] hover:opacity-70 transition-opacity"
            >
                <p
                    className="text-center"
                >
                    Fazer Logout
                </p>
            </div>
        </div>
    )
}