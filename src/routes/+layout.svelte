<script lang="ts">
  import '$/app.css';
  import { onMount } from 'svelte';
  import { loadTranslations, locale, t } from '$/lib/translations';

  onMount(async () => {
    const current = localStorage.getItem('locale');

    if (current && locale.get() !== current) {
      await loadTranslations(current);

      $locale = current;
    } else {
      await loadTranslations('pt-BR');
    }

    document.documentElement.setAttribute('lang', $locale);
  });
</script>

<svelte:head>
  <meta name="description" content={$t('common.page.description')} />
  <meta name="keywords" content={$t('common.page.keywords')} />
  <meta name="author" content={$t('common.page.author')} />
  <meta name="image" content="https://mrsev7en.vercel.app/images/logo.png" />

  <meta name="og:description" content={$t('common.page.description')} />
  <meta name="og:keywords" content={$t('common.page.keywords')} />
  <meta name="og:author" content={$t('common.page.author')} />
  <meta name="og:image" content="https://mrsev7en.vercel.app/images/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content={$t('common.page.description')} />
  <meta name="twitter:image" content="https://mrsev7en.vercel.app/images/logo.png" />
  <meta property="twitter:domain" content="mrsev7en.vercel.app" />
  <meta property="twitter:url" content="https://mrsev7en.vercel.app/" />
</svelte:head>

<slot />
