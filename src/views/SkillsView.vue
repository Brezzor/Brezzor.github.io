<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const SkillCard = defineAsyncComponent(
  () => import('../components/SkillCardComponent.vue')
)
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('Skills') }}</h1>
        <h2>Frontend:</h2>
        <div class="row g-4 mb-2">
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Html" :-bar-value="100" :-skill-level="$t('Advanced')"
            -bar-color="#f06529"
            :-years-spent="3"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/html5-logo.svg" alt="Html logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="JavaScript" :-bar-value="75" :-skill-level="$t('Intermediate')+'/'+$t('Advanced')"
            -bar-color="#f0db4f"
            :-years-spent="3"
            :-months-spent="6"
            -text-color="#000000">
              <template #SkillIcon>
                <img src="../assets/javascript-logo.svg" alt="JavaScript logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="CSS" :-bar-value="75" :-skill-level="$t('Intermediate')+'/'+$t('Advanced')"
            -bar-color="#2965f1"
            :-years-spent="3"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/css3-logo.svg" alt="CSS logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Vue.js" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#41b883"
            :-years-spent="2"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/vue-logo.svg" alt="vue logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="TypeScript" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#3178c6"
            :-years-spent="0"
            :-months-spent="4">
              <template #SkillIcon>
                <img src="../assets/typescript-logo.svg" alt="TypeScript logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
        </div>
        <h2>Backend:</h2>
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="C#" :-bar-value="75" :-skill-level="$t('Intermediate')+'/'+$t('Advanced')"
            -bar-color="#823085"
            :-years-spent="3"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/c-sharp-logo.svg" alt="C# logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Python" :-bar-value="25" :-skill-level="$t('Beginner')"
            -bar-color="#ffde57"
            :-years-spent="1"
            :-months-spent="5"
            -text-color="#000000">
              <template #SkillIcon>
                <img src="../assets/python-logo.svg" alt="C# logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-icon {
  height: 1.5rem;
  width: 1.5rem;
  margin-right: .5rem;
}
</style>