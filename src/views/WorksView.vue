<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('WorksPage.Title') }}</h1>
        <div class="row mt-4">
          <div class="col">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img class="company-logo" src="../assets/ChannelCrm.png" alt="Company logo">
            </div>
          </div>
          <div class="col">
            <h2>{{$t('WorksPage.Companies.ChannelCrm.Name')}}</h2>
            <p>{{ $t('WorksPage.Companies.ChannelCrm.Text-1') }}</p>
            <p>{{ $t('WorksPage.Companies.ChannelCrm.Text-2') }}</p>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-logo {
  width: 100%;
}
</style>