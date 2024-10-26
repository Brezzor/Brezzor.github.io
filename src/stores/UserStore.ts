import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, type User, onAuthStateChanged, updateProfile, sendEmailVerification, updateEmail } from 'firebase/auth'
import {ref as storageRef, getStorage, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage'

export const useUserStore = defineStore('userStore', () => {
  const user = ref<null | User>(null)
  const auth = getAuth()
  const storageProfilePhotoPath = ref<string>()
  const storage = getStorage()
  
  const updateUserInfo = async (newDisplayName: string | null | undefined, file: File | null | undefined, newEmail: string | null | undefined) => {
    let newPhotoUrl: string | null | undefined
    if (file != undefined && (file.type === "image/png" || file.type === "image/jpeg")) {      
      storageProfilePhotoPath.value = `profilePhotos/${user.value?.uid}/ProfilePhoto`
      const profilePhotoRef = storageRef(storage, storageProfilePhotoPath.value)
      
      await uploadBytes(profilePhotoRef, file)
      .then((value) => {
        console.log(value)
      }).catch((error) => {
        console.log(error.message)
      })

      await getDownloadURL(profilePhotoRef)
      .then((value) => {
        newPhotoUrl = value
      }).catch((error) => {
        console.log(error.message)
      })
    }
    if (user.value) {
      if (!file) {
        await updateProfile(user.value, {displayName: newDisplayName }).catch((error) => {
          console.log(error.message)
        })
      }
      else if (newDisplayName?.trim() != user.value!.displayName) {
        await updateProfile(user.value, {photoURL: newPhotoUrl }).catch((error) => {
          console.log(error.message)
        })
      }
      else
      {
        await updateProfile(user.value, {displayName: newDisplayName, photoURL: newPhotoUrl }).catch((error) => {
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

  const removeProfilePhoto = async () => {
    storageProfilePhotoPath.value = `profilePhotos/${user.value?.uid}/ProfilePhoto`
    const profilePhotoRef = storageRef(storage, storageProfilePhotoPath.value)
    await deleteObject(profilePhotoRef)
    .then(async () => {
      
    })
    .catch((error) => {
      console.log(error.message)
    })

    if (user.value) {
      await updateProfile(user.value, {photoURL: ''})
      .then(() => {

      })
      .catch((error) => {
        console.log(error.message)
      })
    }
  }

  const sendEmailVerify = async () => {
    if (user.value !== null) {
      await sendEmailVerification(user?.value)
      .then(()=>{
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
    removeProfilePhoto,
    getCurrentUser
  }
})
