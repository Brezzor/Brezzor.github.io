<script setup lang="ts"></script>

<template>
  <footer class="mt-auto py-3 bg-body-tertiary shadow-top fixed-bottom">
    <div class="container">
      <div class="d-flex justify-content-between">
        <span class="text-body-secondary">© 2024 Oliver Bresson. All rights reserved.</span>
        <div class="d-flex gap-2">
          <a class="icon-link fs-4" href="https://www.linkedin.com/in/oliver-bresson-277788138/" target="_blank"
            aria-label="linkedin link">
            <i class="bi bi-linkedin" style="color: var(--linkedin-color)"></i>
          </a>
          <a class="icon-link fs-4" href="https://www.facebook.com/OliverBresson" target="_blank"
            aria-label="facebook link">
            <i class="bi bi-facebook" style="color: var(--facebook-color)"></i>
          </a>
          <a class="icon-link fs-4" href="https://github.com/Brezzor" target="_blank" aria-label="github link">
            <i class="bi bi-github" style="color: var(--github-color)"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.shadow-top {
  box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
