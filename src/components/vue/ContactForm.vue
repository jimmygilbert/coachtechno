<script setup lang="ts">
import { ref, reactive } from 'vue';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const form = reactive<FormData>({
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
});

const errors = reactive<FormErrors>({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);
const isSuccess = ref(false);
const submitError = ref<string | null>(null);

function validate(): boolean {
  errors.name = '';
  errors.email = '';
  errors.message = '';

  let valid = true;

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis.';
    valid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'Le courriel est requis.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Veuillez entrer un courriel valide.';
    valid = false;
  }

  if (!form.message.trim()) {
    errors.message = 'Le message est requis.';
    valid = false;
  } else if (form.message.trim().length < 20) {
    errors.message = 'Veuillez écrire un message d\'au moins 20 caractères.';
    valid = false;
  }

  return valid;
}

async function handleSubmit() {
  if (!validate()) return;

  isSubmitting.value = true;
  submitError.value = null;

  try {
    await new Promise(resolve => setTimeout(resolve, 1200));
    isSuccess.value = true;

    setTimeout(() => {
      isSuccess.value = false;
      form.name = '';
      form.email = '';
      form.company = '';
      form.service = '';
      form.message = '';
    }, 5000);
  } catch (e) {
    submitError.value = 'Une erreur est survenue. Veuillez réessayer.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
    <div>
      <label for="name" class="block text-sm font-medium text-gray-300 mb-1">
        Nom complet <span class="text-red-400">*</span>
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        autocomplete="name"
        :class="[
          'w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition',
          errors.name ? 'border-red-500 bg-red-500/10' : 'border-surface-600 bg-surface-700',
        ]"
        placeholder="Votre nom"
      />
      <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-300 mb-1">
        Courriel <span class="text-red-400">*</span>
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        autocomplete="email"
        :class="[
          'w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition',
          errors.email ? 'border-red-500 bg-red-500/10' : 'border-surface-600 bg-surface-700',
        ]"
        placeholder="votre@courriel.com"
      />
      <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
    </div>

    <div>
      <label for="company" class="block text-sm font-medium text-gray-300 mb-1">
        Entreprise
      </label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        autocomplete="organization"
        class="w-full px-4 py-3 rounded-xl border border-surface-600 bg-surface-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
        placeholder="Nom de votre entreprise (optionnel)"
      />
    </div>

    <div>
      <label for="service" class="block text-sm font-medium text-gray-300 mb-1">
        Service qui vous intéresse
      </label>
      <select
        id="service"
        v-model="form.service"
        class="w-full px-4 py-3 rounded-xl border border-surface-600 bg-surface-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition"
      >
        <option value="">Choisissez un service...</option>
        <option value="audit">Audit IA entreprise</option>
        <option value="formation">Formation IA pour équipes</option>
        <option value="implantation">Implantation IA</option>
        <option value="coaching">Coaching technologique</option>
        <option value="autre">Autre / Je ne sais pas encore</option>
      </select>
    </div>

    <div>
      <label for="message" class="block text-sm font-medium text-gray-300 mb-1">
        Message <span class="text-red-400">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        :class="[
          'w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition resize-none',
          errors.message ? 'border-red-500 bg-red-500/10' : 'border-surface-600 bg-surface-700',
        ]"
        placeholder="Décrivez brièvement votre situation et ce que vous cherchez à accomplir..."
      />
      <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
    </div>

    <div v-if="submitError" class="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
      <p class="text-red-400 font-medium">{{ submitError }}</p>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting || isSuccess"
      :class="[
        'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200',
        isSuccess
          ? 'bg-green-600 text-white cursor-default'
          : isSubmitting
            ? 'bg-brand-700 text-white cursor-wait'
            : 'bg-brand-500 hover:bg-brand-400 text-surface-950 shadow-md hover:shadow-lg',
      ]"
    >
      <span v-if="isSuccess">Message envoyé ✓</span>
      <span v-else-if="isSubmitting">Envoi en cours...</span>
      <span v-else>Envoyer le message</span>
    </button>

    <div v-if="isSuccess" class="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
      <p class="text-green-400 font-medium">Merci! Je vous répondrai dans les 24 heures.</p>
    </div>
  </form>
</template>

<style scoped>
</style>
