<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  displayTextArray: { type: Array<String>, required: true },
  textClass: { type: String, required: true },
  typingSpeed: { type: Number, default: 100 },
  erasingSpeed: { type: Number, default: 100 },
  newTextDelay: { type: Number, default: 2000 },
})

const refs = ref({
  typeValue: '',
  typeStatus: false,
  displayTextArrayIndex: 0,
  charIndex: 0
})

onMounted(() => {
  setTimeout(typeText, props.newTextDelay + 200)
})

function typeText() {
  if (refs.value.charIndex < props.displayTextArray[refs.value.displayTextArrayIndex].length) {
    if (!refs.value.typeStatus) refs.value.typeStatus = true
    refs.value.typeValue += props.displayTextArray[refs.value.displayTextArrayIndex].charAt(refs.value.charIndex)
    refs.value.charIndex += 1
    setTimeout(typeText, props.typingSpeed)
  } else {
    refs.value.typeStatus = false
    setTimeout(eraseText, props.newTextDelay)
  }
}

function eraseText() {
  if (refs.value.charIndex > 0) {
    if (!refs.value.typeStatus) refs.value.typeStatus = true
    refs.value.typeValue = props.displayTextArray[refs.value.displayTextArrayIndex].substring(
      0,
      refs.value.charIndex - 1
    )
    refs.value.charIndex -= 1
    setTimeout(eraseText, props.erasingSpeed)
  } else {
    refs.value.typeStatus = false
    refs.value.displayTextArrayIndex += 1
    if (refs.value.displayTextArrayIndex >= props.displayTextArray.length)
      refs.value.displayTextArrayIndex = 0
    setTimeout(typeText, props.typingSpeed + 1000)
  }
}
</script>

<template>
  <p :class="textClass">
    <span class="typed-text">{{ refs.typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: refs.typeStatus }">&nbsp;</span>
  </p>
</template>

<style lang="scss" scoped>
// Cursor blinking CSS Starts...
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-moz-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-webkit-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-ms-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@-o-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}
</style>
