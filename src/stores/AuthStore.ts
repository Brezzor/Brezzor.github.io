import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  browserLocalPersistence,
  signOut,
  createUserWithEmailAndPassword,
  type Persistence,
  onAuthStateChanged,
  sendEmailVerification
} from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {
  const errMsg = ref<null | string>(null)
  const isLoggedIn = ref<boolean>(false)
  const loadingSession = ref<boolean>(true)
  const rememberMe = ref<boolean>(false)

  const auth = getAuth()

  const loginUser = (email: string, password: string) => {
    let persistenceType: Persistence = browserSessionPersistence
    if (rememberMe.value) {
      persistenceType = browserLocalPersistence
    } else {
      persistenceType = browserSessionPersistence
    }
    setPersistence(auth, persistenceType)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            isLoggedIn.value = true
            errMsg.value = null
            router.push({ name: 'Feed' })
          })
          .catch((error) => {
            switch (error.code) {
              case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
                break
              case 'auth/user-not-found':
                errMsg.value = 'No account with that email was found'
                break
              case 'auth/wrong-password':
                errMsg.value = 'Incorrect password'
                break
              case 'auth/missing-password':
                errMsg.value = 'Missing password'
                break
              case 'auth/invalid-login-credentials':
                errMsg.value = 'Invalid login credentials'
                break
              default:
                errMsg.value = 'Email or password was incorrect'
                break
            }
          })
      })
      .catch((error) => {
        errMsg.value = error.message
      })
  }

  const registerUser = (email: string, password: string) => {
    let persistenceType: Persistence = browserSessionPersistence
    if (rememberMe.value) {
      persistenceType = browserLocalPersistence
    } else {
      persistenceType = browserSessionPersistence
    }
    setPersistence(auth, persistenceType)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then((data) => {
            isLoggedIn.value = true
            errMsg.value = null
            sendEmailVerification(data.user)
            router.push({ name: 'Feed' })
          })
          .catch((error) => {
            switch (error.code) {
              case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
                break
              case 'auth/missing-password':
                errMsg.value = 'Missing password'
                break
              case 'auth/weak-password':
                errMsg.value = 'Password is too weak'
                break
              default:
                errMsg.value = 'Email already in use'
                break
            }
          })
      })
      .catch((error) => {
        errMsg.value = error.message
      })
  }

  const signOutUser = () => {
    signOut(auth)
    isLoggedIn.value = false
    router.push({ name: 'Home' })
  }

  onAuthStateChanged(auth, (currentUser) => {
    loadingSession.value = true
    if (currentUser) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
    loadingSession.value = false
  })

  return {
    errMsg,
    isLoggedIn,
    loadingSession,
    rememberMe,
    loginUser,
    registerUser,
    signOutUser
  }
})
