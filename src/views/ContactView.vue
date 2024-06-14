<script setup lang="ts">
import ContactCard from '../components/ContactCardComponent.vue'
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="container text-center">
          <h1>Kontakt mig</h1>
          <div class="row g-4">
            <div class="col-md-12 col-lg-6">
              <div class="d-flex justify-content-center align-items-center h-100">
                <img class="image" src="../assets/my-image.webp" alt="headshot" height="100%" width="100%" />
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="row g-4">
                  <div class="col-xs-12 col-sm-6">
                    <ContactCard icon-name="bi-envelope-at-fill" contact-name="Mail"
                      contact-url="mailto:oliver.bresson@gmail.com" contact-url-text="oliver.bresson@gmail.com" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <ContactCard icon-name="bi-phone-fill" contact-name="Mobil" contact-url="tel:22265056"
                      contact-url-text="+45 22 26 50 56" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <ContactCard icon-name="bi-linkedin" icon-color="linkedin-color" contact-name="Linkedin"
                      contact-url="https://www.linkedin.com/in/oliver-bresson-277788138/"
                      contact-url-text="Oliver Bresson" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <ContactCard icon-name="bi-facebook" icon-color="facebook-color" contact-name="Facebook"
                      contact-url="https://www.linkedin.com/in/oliver-bresson-277788138/"
                      contact-url-text="Oliver Bresson" />
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <ContactCard icon-name="bi-github" icon-color="github-color" contact-name="Github"
                      contact-url="https://github.com/Brezzor?tab=repositories" contact-url-text="Brezzor" />
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
.image {
  height: 50%;
  width: auto;
  max-height: 100%;
  max-width: 100%;
  filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.5));
}
</style>
