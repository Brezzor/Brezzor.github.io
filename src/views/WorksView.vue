<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('WorksPage.Title') }}</h1>
        <div class="card shadow mt-4">
          <div class="card-header">
            <h2 class="text-center">{{$t('WorksPage.Companies.ChannelCrm.Name')}}</h2>
          </div>
          <div class="card-body">
            <div class="row">
          <div class="col-12 col-lg-4">
            <div class="d-flex justify-content-center align-items-center h-100">
              <img class="company-logo" src="../assets/ChannelCrm.png" alt="Company logo">
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <p>{{ $t('WorksPage.Companies.ChannelCrm.Text-1') }}</p>
            <p>{{ $t('WorksPage.Companies.ChannelCrm.Text-2') }}</p>
          </div>          
        </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-logo {
  height: auto;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

@media (min-width: 576px){
  .company-logo {
    width: 75%;
  }
}

@media (min-width: 992px){
  .company-logo {
    width: 100%;
  }
}
</style>