<template>
  <div
    :class="[
      'rounded-2xl p-8 text-center transition-all duration-300',
      variant === 'dark'
        ? 'bg-brand-950 text-white'
        : 'bg-brand-50 border border-brand-100',
    ]"
  >
    <p
      v-if="badge"
      :class="[
        'inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4',
        variant === 'dark' ? 'bg-accent-500/20 text-accent-400' : 'bg-brand-100 text-brand-700',
      ]"
    >
      {{ badge }}
    </p>
    <h2
      :class="[
        'text-2xl md:text-3xl font-heading font-bold mb-3',
        variant === 'dark' ? 'text-white' : 'text-gray-900',
      ]"
    >
      {{ title }}
    </h2>
    <p
      :class="[
        'text-base mb-6 max-w-lg mx-auto',
        variant === 'dark' ? 'text-brand-200' : 'text-gray-600',
      ]"
    >
      {{ subtitle }}
    </p>
    <a
      :href="href"
      :class="[
        'inline-block font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-md',
        variant === 'dark'
          ? 'bg-accent-500 hover:bg-accent-600 text-white'
          : 'bg-brand-600 hover:bg-brand-700 text-white',
      ]"
    >
      {{ cta }}
    </a>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  badge?: string;
  variant?: 'light' | 'dark';
}>(), {
  variant: 'light',
});
</script>
