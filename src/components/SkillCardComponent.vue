<script setup lang="ts">
defineProps({
  SkillName: { type: String, required: true },
  BarColor: {type: String, required: false},
  BarValue: {type: Number, required: true},
  SkillLevel: {type: String, required: true},
  YearsSpent: {type: Number, required: false},
  MonthsSpent: {type: Number, required: false},
  TextColor: {type: String, required: false},
  ImgUrl: {type: String, required: true}
})
</script>

<template>
  <div class="card">
    <div class="card-header">
      <img :src="ImgUrl" alt="logo" height="20" width="20" class="skill-icon me-2">
      <span>{{ SkillName }}</span>
    </div>
    <div class="card-body">
      <span>
        <span v-if="YearsSpent || MonthsSpent">{{ $t('UsedFor') }}:</span>

        <span class="ms-2" v-if="YearsSpent && YearsSpent > 1">{{ YearsSpent }} {{ $t('Years') }}</span>
        <span class="ms-2" v-else-if="YearsSpent && YearsSpent <= 1">{{ YearsSpent }} {{ $t('Year') }}</span>
        
        <span class="ms-2" v-if="MonthsSpent && MonthsSpent > 1">{{ MonthsSpent }} {{ $t('Months') }}</span>
        <span class="ms-2" v-else-if="MonthsSpent && MonthsSpent <= 1">{{ MonthsSpent }} {{ $t('Month') }}</span>
      </span>
      <div class="progress" role="progressbar" aria-label="Example with label" :aria-valuenow="BarValue" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped fw-bold" :style="{ width: BarValue + '%', backgroundColor: BarColor, color: TextColor }" >{{ SkillLevel }}</div>
</div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  height: 2rem;
}
</style>
