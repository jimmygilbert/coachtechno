<script setup lang="ts">
import { ref } from 'vue';

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items?: FaqItem[];
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    {
      question: 'Mon entreprise est-elle trop petite pour l\'IA?',
      answer: 'Non. L\'IA est particulièrement avantageuse pour les petites entreprises car elle permet de compenser le manque de ressources humaines. Même une entreprise de 2-3 personnes peut bénéficier d\'automatisations simples qui sauvent plusieurs heures par semaine.',
    },
    {
      question: 'Faut-il des connaissances techniques pour utiliser l\'IA?',
      answer: 'Pas du tout. Mon approche est justement de rendre l\'IA accessible sans connaissances techniques. Je m\'occupe de la partie technique et je vous forme sur l\'utilisation des outils de façon simple et concrète.',
    },
    {
      question: 'Combien de temps avant de voir des résultats?',
      answer: 'La plupart de mes clients voient des gains de productivité dès la première semaine. Pour un audit complet avec implantation, comptez 4-6 semaines pour des résultats mesurables et durables.',
    },
    {
      question: 'Par où commencer si je ne sais pas ce dont j\'ai besoin?',
      answer: 'L\'audit IA est le meilleur point de départ. En 2 semaines, j\'analyse vos processus et vous remets un plan d\'action clair avec les automatisations les plus rentables pour votre situation.',
    },
    {
      question: 'Est-ce que les solutions fonctionnent avec mes outils actuels?',
      answer: 'Oui. Je travaille avec les outils que vous utilisez déjà (Microsoft 365, Google Workspace, etc.) et j\'intègre l\'IA dans votre environnement existant plutôt que de tout remplacer.',
    },
  ],
});

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <div class="space-y-3">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="border border-surface-600 rounded-xl overflow-hidden"
    >
      <button
        @click="toggle(index)"
        class="w-full flex items-center justify-between px-6 py-4 text-left bg-surface-800 hover:bg-surface-700 transition-colors"
        :aria-expanded="openIndex === index"
      >
        <span class="font-medium text-white pr-4">{{ item.question }}</span>
        <span
          class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center transition-transform duration-200"
          :class="{ 'rotate-180': openIndex === index }"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="openIndex === index" class="px-6 pb-5 bg-surface-800">
          <p class="text-gray-400 text-sm leading-relaxed">{{ item.answer }}</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
</style>
