<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  badge?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="rounded-2xl p-8 text-center transition-all duration-300 bg-surface-700 border border-surface-600">
    <p
      v-if="badge"
      class="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 bg-brand-500/20 text-brand-400"
    >
      {{ badge }}
    </p>
    <h2 class="text-2xl md:text-3xl font-heading font-bold mb-3 text-white">
      {{ title }}
    </h2>
    <p class="text-base mb-6 max-w-lg mx-auto text-gray-400">
      {{ subtitle }}
    </p>
    <a
      :href="href"
      class="inline-block font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md bg-brand-500 hover:bg-brand-400 text-surface-950"
    >
      {{ cta }}
    </a>
  </div>
</template>

<style scoped>
</style>
