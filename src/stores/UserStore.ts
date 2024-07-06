import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, type User, onAuthStateChanged, updateProfile } from 'firebase/auth'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<null | User>(null)

  const auth = getAuth()

  const updateDisplayname = async (displayName: string) => {
    if (user.value !== null) {
      await updateProfile(user?.value, { displayName: displayName }).catch((error) => {
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
    updateDisplayname,
    getCurrentUser
  }
})
