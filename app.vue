<template>
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <div :key="$route.fullPath">
        <NuxtPage></NuxtPage>
      </div>
    </Transition>
  </NuxtLayout>
</template>
