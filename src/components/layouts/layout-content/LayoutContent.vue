<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-body">
        <transition name="zoom-fade" mode="out-in">
          <slot />
        </transition>
      </div>
    </div>
  </div>
</template>
