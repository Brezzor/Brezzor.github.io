<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1 class="text-center">Hvem er jeg</h1>
        <div class="container pt-2">
          <div class="row gap-4">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <p>
                    Mit navn er <span class="name">Oliver Bresson</span>, jeg er 26 år gammel og bor
                    i Roskilde. Jeg har en stor interesse for programmering og teknologi. Jeg er
                    tidligere uddannet EUX Elektriker, med speciale ind for CTS (Central
                    Tilstandskontrol og Styring).
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12">
              <div class="card">
                <div class="card-body">
                  <h2 class="text-center">Interesser</h2>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Familie
                      <i class="bi bi-house-heart-fill fs-4"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Venner
                      <i class="bi bi-people-fill fs-4"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Gaming
                      <i class="bi bi-dpad-fill fs-4"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Computer
                      <i class="bi bi-pc-display fs-4"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Programmering
                      <i class="bi bi-terminal-fill fs-4"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Teknologi
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
                      <h2 class="text-center">Uddannelse</h2>
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item d-flex justify-content-between align-items-center"
                        >
                          Datamatiker
                          <span class="badge text-bg-primary rounded-pill">Færdiggjort 2024</span>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between align-items-center"
                        >
                          EUX Elektriker
                          <span class="badge text-bg-primary rounded-pill">Færdiggjort 2020</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <h2 class="text-center">Mine mål</h2>
                      <p class="px-3">
                        Mine mål er at udvide min viden inde for programmering og systemudvikling.
                        Samt at få erfaring med at bruge det jeg har lært fra min tid på Datamatiker
                        uddannelsen, på Zealand Roskilde
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
  </div>
</template>

<style scoped>
.list-group-item:hover {
  color: var(--primary-color);
}
</style>
