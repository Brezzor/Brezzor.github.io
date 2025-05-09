import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getAuth,
  type User,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  updateEmail
} from 'firebase/auth'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<null | User>(null)
  const auth = getAuth()

  const updateUserInfo = async (
    newDisplayName: string | null | undefined,
    newPhotoUrl: string | null | undefined,
    newEmail: string | null | undefined
  ) => {
    if (user.value) {
      if (!newPhotoUrl) {
        await updateProfile(user.value, { displayName: newDisplayName }).catch((error) => {
          console.log(error.message)
        })
      } else if (newDisplayName?.trim() != user.value!.displayName) {
        await updateProfile(user.value, { photoURL: newPhotoUrl }).catch((error) => {
          console.log(error.message)
        })
      } else {
        await updateProfile(user.value, {
          displayName: newDisplayName,
          photoURL: newPhotoUrl
        }).catch((error) => {
          console.log(error.message)
        })
      }
      if (newEmail != null) {
        if (newEmail != user.value.email) {
          await updateEmail(user.value, newEmail)
        }
      }
    }
  }

  const sendEmailVerify = async () => {
    if (user.value !== null) {
      await sendEmailVerification(user?.value)
        .then(() => {
          alert('Verification Email send!')
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }

  const getCurrentUser = async () => {
    return new Promise<User | null>((resolve, reject) => {
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener()
          resolve(user)
        },
        reject
      )
    })
  }

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })

  return {
    user,
    updateUserInfo,
    sendEmailVerify,
    getCurrentUser
  }
})
