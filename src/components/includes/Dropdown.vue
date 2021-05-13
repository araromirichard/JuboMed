<template>
  <Menu as="div" class="relative inline-block text-center">
    <div>
      <MenuButton
        class="inline-flex justify-center mt-4 sm:mt-0 w-full justify-center uppercase sm:space-x-4 sm:text-center text-white border-none sm:border-none sm:focus:outline-none hover:text-secondary"
      >
        More
        <ChevronDownIcon
          class="-mr-1 ml-2 h-5 w-5 pt-2 content-center text-lg"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        as="ul"
        class="origin-top-right absolute left-0 mt-2 w-56 text-lg rounded-md bg-primary sm:bg-primary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      >
        <MenuItem as="li" v-slot="{ active }">
          <a
            href="/partnership"
            :class="[
              active ? 'bg-white text-secondary' : 'text-white',
              'block px-4 py-2 text-sm',
            ]"
            >Partnership</a
          >
        </MenuItem>
        <MenuItem as="li" v-slot="{ active }">
          <a
            href="/publications"
            :class="[
              active ? 'bg-white text-secondary' : 'text-white',
              'block px-4 py-2 text-sm',
            ]"
            >Publications</a
          >
        </MenuItem>
        <MenuItem as="li" v-slot="{ active }">
          <a
            href="/mediation-laws"
            :class="[
              active ? 'bg-white text-secondary' : 'text-white',
              'block px-4 py-2 text-sm',
            ]"
            >Mediation Laws</a
          >
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
};
</script>
