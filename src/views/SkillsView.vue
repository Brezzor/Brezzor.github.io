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
        <h2 class="mt-4">Frontend:</h2>
        <div class="row g-4 mb-4">
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
            <SkillCard -skill-name="Bootstrap" :-bar-value="75" :-skill-level="$t('Intermediate')+'/'+$t('Advanced')"
            -bar-color="#6f2cf4"
            :-years-spent="3"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/bootstrap-logo.svg" alt="Bootstrap logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="JQuery" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#1266a9"
            :-years-spent="0"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/jquery-logo.svg" alt="Vue logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Vue.js" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#41b883"
            :-years-spent="2"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/vue-logo.svg" alt="Vue logo" height="20" width="20" class="skill-icon">
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
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Sass" :-bar-value="25" :-skill-level="$t('Beginner')"
            -bar-color="#ce6799"
            :-years-spent="0"
            :-months-spent="1">
              <template #SkillIcon>
                <img src="../assets/sass-logo.svg" alt="TypeScript logo" height="20" width="20" class="skill-icon">
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
            <SkillCard -skill-name="SQL" :-bar-value="75" :-skill-level="$t('Intermediate')+'/'+$t('Advanced')"
            -bar-color="#007FFF"
            :-years-spent="2"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/sql-logo.svg" alt="SQL logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="MSSQL" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#b71c1c"
            :-years-spent="2"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/mssql-logo.svg" alt="MSSQL logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="T-SQL" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#b71c1c"
            :-years-spent="2"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/mssql-logo.svg" alt="T-SQL logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name=".NET" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#5129d3"
            :-years-spent="2"
            :-months-spent="0">
              <template #SkillIcon>
                <img src="../assets/dotnet-logo.png" alt=".NET logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Kotlin" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#B125EA"
            :-years-spent="0"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/kotlin-logo.svg" alt="Kotlin logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Python" :-bar-value="50" :-skill-level="$t('Intermediate')"
            -bar-color="#ffde57"
            :-years-spent="1"
            :-months-spent="5"
            -text-color="#000000">
              <template #SkillIcon>
                <img src="../assets/python-logo.svg" alt="Python logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="Node.js" :-bar-value="25" :-skill-level="$t('Beginner')"
            -bar-color="#68a063"
            :-years-spent="1"
            :-months-spent="5">
              <template #SkillIcon>
                <img src="../assets/nodejs-logo.svg" alt="Node.js logo" height="20" width="20" class="skill-icon">
              </template>
            </SkillCard>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <SkillCard -skill-name="PHP" :-bar-value="25" :-skill-level="$t('Beginner')"
            -bar-color="#777BB3"
            :-years-spent="0"
            :-months-spent="6">
              <template #SkillIcon>
                <img src="../assets/php-logo.svg" alt="PHP logo" height="20" width="20" class="skill-icon">
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
  width: auto;
  margin-right: .5rem;
}
</style>