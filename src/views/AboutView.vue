<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="card shadow">
      <div class="card-body">
        <h1 class="text-center">{{ $t('AboutPage.Title') }}</h1>
        <div class="row gap-4 mt-4">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <p>
                  {{ $t('AboutPage.AboutMeParts.First') }}
                  <span class="name">Oliver Bresson</span>,
                  {{ $t('AboutPage.AboutMeParts.Second') }}.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="card">
              <div class="card-body">
                <h2 class="text-center">{{ $t('AboutPage.Interests.Title') }}</h2>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.1') }}
                    <i class="bi bi-house-heart-fill fs-4"></i>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.2') }}
                    <i class="bi bi-people-fill fs-4"></i>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.3') }}
                    <i class="bi bi-dpad-fill fs-4"></i>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.4') }}
                    <i class="bi bi-pc-display fs-4"></i>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.5') }}
                    <i class="bi bi-terminal-fill fs-4"></i>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{ $t('AboutPage.Interests.6') }}
                    <i class="bi bi-cpu-fill fs-4"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row gap-4">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h2 class="text-center">{{ $t('AboutPage.Education.Title') }}</h2>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="row g-2 g-sm-0">
                          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
                            <span>{{ $t('AboutPage.Education.ComputerScience') }}</span>
                          </div>
                          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                            <span class="badge text-bg-primary rounded-pill">{{ $t('Finished') }} 2024</span>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="row g-2 g-sm-0">
                          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
                            <span>{{ $t('AboutPage.Education.Electrician') }}</span>
                          </div>
                          <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                            <span class="badge text-bg-primary rounded-pill">{{ $t('Finished') }} 2020</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h2 class="text-center">{{ $t('AboutPage.MyGoals.Title') }}</h2>
                    <p class="px-3">
                      {{ $t('AboutPage.MyGoals.Goals') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group-item:hover {
  color: var(--primary-color);
}

.list-group-item:hover .bi::before {
  animation-name: shake;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>
