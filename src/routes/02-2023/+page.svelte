<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { locale, t } from '$/lib/translations';

  const scrollTop = writable(0);

  const home = writable<HTMLElement>();
  const about = writable<HTMLElement>();
  const projects = writable<HTMLElement>();
  const abilities = writable<HTMLElement>();
  const contact = writable<HTMLElement>();

  function scroll(): void {
    const url = new URL($page.url);
    const hash = url.hash;

    if (hash === '#home') {
      $home.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#about') {
      $about.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#projects') {
      $projects.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#abilities') {
      $abilities.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#contact') {
      $contact.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onMount(() => scroll());
</script>

<svelte:window on:scroll={() => ($scrollTop = window.scrollY)} on:hashchange={() => scroll()} />

<svelte:head>
  <title>{$t('common.page.title')}</title>
  <meta name="og:title" content={$t('common.page.title')} />
  <meta name="twitter:title" content={$t('common.page.title')} />
</svelte:head>

{#if $scrollTop > 0}
  <header
    class="bg-white w-full min-h-16 w-fit px-8 fixed inset-0 flex items-center justify-center md:justify-between flex-row flex-wrap gap-4 md:gap-2 select-none z-[1]"
    transition:fade={{ duration: 200 }}
  >
    <span class="text-black text-base md:text-lg font-extrabold">
      {$t('common.page.author')}
    </span>
    <div class="flex items-center flex-row gap-4">
      <a
        class="text-black text-sm md:text-base font-medium cursor-pointer"
        href={$page.url.pathname.concat('#home')}
      >
        {$t('common.header.button.0')}
      </a>
      <a
        class="text-black text-sm md:text-base font-medium cursor-pointer"
        href={$page.url.pathname.concat('#about')}
      >
        {$t('common.header.button.1')}
      </a>
      <a
        class="text-black text-sm md:text-base font-medium cursor-pointer"
        href={$page.url.pathname.concat('#projects')}
      >
        {$t('common.header.button.2')}
      </a>
      <a
        class="text-black text-sm md:text-base font-medium cursor-pointer"
        href={$page.url.pathname.concat('#abilities')}
      >
        {$t('common.header.button.3')}
      </a>
      <a
        class="text-black text-sm md:text-base font-medium cursor-pointer"
        href={$page.url.pathname.concat('#contact')}
      >
        {$t('common.header.button.4')}
      </a>
    </div>
  </header>
{/if}

<main class="w-fit h-fit flex flex-col">
  <!-- Home -->
  <div
    class="w-screen min-h-screen p-8 flex justify-center items-center flex-col-reverse md:flex-row gap-8 select-none"
    bind:this={$home}
  >
    <div class="max-w-[32rem] flex flex-col gap-4">
      <div class="flex items-center md:items-start flex-col">
        <span class="text-white text-xl font-bold">{$t('common.main.home.title.0')}</span>
        <span class="text-purple-600 text-4xl font-black">{$t('common.main.home.title.1')}</span>
      </div>
      <span class="text-neutral-500 text-lg font-normal italic text-center md:text-start">
        {$t('common.main.home.title.2')}
      </span>
      <div class="flex justify-center md:justify-start flex-row gap-4">
        <a
          class="bg-purple-600 text-white px-4 py-2 text-base font-light rounded-sm hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200"
          href={$page.url.pathname.concat('#projects')}
        >
          {$t('common.main.home.button.0')}
        </a>
        <a
          class="text-white px-4 py-2 text-base font-light rounded-sm hover:outline hover:outline-1 hover:outline-white active:outline-neutral-500 transition-colors duration-200"
          href={$page.url.pathname.concat('#contact')}
        >
          {$t('common.main.home.button.1')}
        </a>
      </div>
    </div>
    <div
      class="w-12 h-12 md:w-24 md:h-24 invert"
      style:background-image="url('/icons/laptop.svg')"
      style:background-size="contain"
      style:background-repeat="no-repeat"
      style:background-position="center"
    />
  </div>

  <!-- About -->
  <div
    class="w-screen min-h-screen p-8 flex items-center justify-center flex-col gap-8 select-none"
    bind:this={$about}
  >
    <span class="text-purple-600 text-4xl text-center md:text-start font-black">
      {$t('common.main.about.title')}
    </span>
    <div class="max-w-[32rem] flex flex-col gap-4">
      <span class="text-white text-base md:text-xl font-normal text-center md:text-start">
        {$t('common.main.about.subtitle.0')}
      </span>
      <span class="text-white text-base md:text-xl font-normal text-center md:text-start">
        {$t('common.main.about.subtitle.1')}
      </span>
      <span class="text-white text-base md:text-xl font-normal text-center md:text-start">
        {$t('common.main.about.subtitle.2')}
      </span>
      <span class="text-white text-base md:text-xl font-normal text-center md:text-start">
        {$t('common.main.about.subtitle.3')}
      </span>
    </div>
  </div>

  <!-- Projects -->
  <div
    class="w-screen min-h-screen p-8 flex items-center justify-center flex-col gap-8 select-none"
    bind:this={$projects}
  >
    <span class="text-purple-600 text-4xl text-center md:text-start font-black">
      {$t('common.main.projects.title')}
    </span>
    <div class="max-w-[32rem] flex flex-col gap-4">
      <!-- CloudLounge -->
      <a
        class="p-4 flex items-center flex-row gap-4 border border-white rounded-md"
        href="https://github.com/Snowflake-Software/cloudlounge/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="min-w-[3rem] min-h-[3rem] md:min-w-[4rem] md:min-h-[4rem] border-2 border-white rounded-full"
          style:background-image="url('/images/projects/cloudlounge.png')"
          style:background-size="contain"
          style:background-repeat="no-repeat"
          style:background-position="center"
        />
        <div class="flex flex-col">
          <span class="text-white text-xl font-bold">
            {$t('common.main.projects.list.0.title')}
          </span>
          <span class="text-white text-base font-normal">
            {$t('common.main.projects.list.0.subtitle')}
          </span>
        </div>
      </a>

      <!-- TabNews Extensions -->
      <a
        class="p-4 flex items-center flex-row gap-4 border border-white rounded-md"
        href="https://github.com/MrSev7en/tabnews-extensions/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="min-w-[3rem] min-h-[3rem] md:min-w-[4rem] md:min-h-[4rem] border-2 border-white rounded-full"
          style:background-image="url('/images/projects/tabnews-extensions.png')"
          style:background-size="contain"
          style:background-repeat="no-repeat"
          style:background-position="center"
        />
        <div class="flex flex-col">
          <span class="text-white text-xl font-bold">
            {$t('common.main.projects.list.1.title')}
          </span>
          <span class="text-white text-base font-normal">
            {$t('common.main.projects.list.1.subtitle')}
          </span>
        </div>
      </a>

      <!-- InSim Base -->
      <a
        class="p-4 flex items-center flex-row gap-4 border border-white rounded-md"
        href="https://github.com/MrSev7en/insim-base/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="min-w-[3rem] min-h-[3rem] md:min-w-[4rem] md:min-h-[4rem] border-2 border-white rounded-full"
          style:background-image="url('/images/projects/insim-base.png')"
          style:background-size="contain"
          style:background-repeat="no-repeat"
          style:background-position="center"
        />
        <div class="flex flex-col">
          <span class="text-white text-xl font-bold">
            {$t('common.main.projects.list.2.title')}
          </span>
          <span class="text-white text-base font-normal">
            {$t('common.main.projects.list.2.subtitle')}
          </span>
        </div>
      </a>
    </div>
  </div>

  <!-- Abilities -->
  <div
    class="w-screen min-h-screen p-8 flex items-center justify-center flex-col gap-8 select-none"
    bind:this={$abilities}
  >
    <span class="text-purple-600 text-4xl text-center md:text-start font-black">
      {$t('common.main.abilities.title')}
    </span>
    <div>
      <div class="max-w-[32rem] flex flex-col gap-4">
        <!-- Advanced -->
        {#each new Array(9).fill(0) as _, index}
          <a
            class="p-4 flex items-start flex-col border border-white rounded-md"
            href={$t(`common.main.abilities.advanced.${index}.href`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="w-full flex items-center flex-row justify-between">
              <span class="text-white text-xl font-bold">
                {$t(`common.main.abilities.advanced.${index}.title`)}
              </span>
              <span class="text-purple-600 text-sm font-bold">
                {$t('common.main.abilities.efficiency.0')}
              </span>
            </div>
            <span class="text-white text-base font-normal">
              {$t(`common.main.abilities.advanced.${index}.subtitle`)}
            </span>
          </a>
        {/each}

        <!-- Intermediary -->
        {#each new Array(3).fill(0) as _, index}
          <a
            class="p-4 flex items-start flex-col border border-white rounded-md"
            href={$t(`common.main.abilities.intermediary.${index}.href`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="w-full flex items-center flex-row justify-between">
              <span class="text-white text-xl font-bold">
                {$t(`common.main.abilities.intermediary.${index}.title`)}
              </span>
              <span class="text-purple-600 text-sm font-bold">
                {$t('common.main.abilities.efficiency.1')}
              </span>
            </div>
            <span class="text-white text-base font-normal">
              {$t(`common.main.abilities.intermediary.${index}.subtitle`)}
            </span>
          </a>
        {/each}

        <!-- Beginner -->
        {#each new Array(3).fill(0) as _, index}
          <a
            class="p-4 flex items-start flex-col border border-white rounded-md"
            href={$t(`common.main.abilities.beginner.${index}.href`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="w-full flex items-center flex-row justify-between">
              <span class="text-white text-xl font-bold">
                {$t(`common.main.abilities.beginner.${index}.title`)}
              </span>
              <span class="text-purple-600 text-sm font-bold">
                {$t('common.main.abilities.efficiency.2')}
              </span>
            </div>
            <span class="text-white text-base font-normal">
              {$t(`common.main.abilities.beginner.${index}.subtitle`)}
            </span>
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Contact -->
  <div
    class="w-screen min-h-screen p-8 flex items-center justify-center flex-col gap-8"
    bind:this={$contact}
  >
    <span class="text-purple-600 text-4xl text-center md:text-start font-black">
      {$t('common.main.contact.title')}
    </span>
    <div class="max-w-[32rem] flex items-center flex-col gap-4">
      <!-- GitHub -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://github.com/MrSev7en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.0')}
      </a>

      <!-- Instagram -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://instagram.com/MrSev7en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.1')}
      </a>

      <!-- Twitter -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://twitter.com/MrSev7en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.2')}
      </a>

      <!-- Discord -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://discord.com/users/417508698630520853/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.3')}
      </a>

      <!-- E-mail -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="mailto:dueduardo01@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.4')}
      </a>

      <!-- LinkedIn -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://www.linkedin.com/in/eduardo-dias-b1a307194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.5')}
      </a>

      <!-- Telegram -->
      <a
        class="text-white text-xl font-medium hover:underline"
        href="https://t.me/MrSev7en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {$t('common.main.contact.list.6')}
      </a>
    </div>
  </div>
</main>

<footer class="w-full h-32 px-8 flex items-center flex-col select-none">
  <div class="bg-neutral-900 w-full h-[1px] rounded-full" />
  <div class="w-full mt-auto flex items-center justify-center flex-row gap-16">
    <span class="text-white  w-fit h-fit text-base font-medium text-center">
      {@html $t('common.footer.title')}
    </span>
    <button
      class="min-w-[2rem] min-h-[2rem] hover:scale-110 transition-transform duration-200"
      style:background-image="url('/icons/flags/{$locale}.svg')"
      style:background-size="contain"
      style:background-repeat="no-repeat"
      style:background-position="center"
      on:click={() => {
        $locale === 'pt-BR' ? ($locale = 'en-US') : ($locale = 'pt-BR');
        localStorage.setItem('locale', $locale);
      }}
    />
  </div>
  <a
    class="text-neutral-900 w-fit h-fit mt-2 mb-auto text-base font-normal underline"
    href="https://github.com/MrSev7en/MrSev7en/"
    target="_blank"
    rel="noopener noreferrer">{$t('common.footer.subtitle')}</a
  >
</footer>
