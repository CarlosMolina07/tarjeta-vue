<script setup>
const mensaje = () => {
  alert('Diste click en la foto')
}

const borrarTarjeta = (index) => {
  console.log('Borrar Tarjeta', index)
  emit('borrarTarjeta', index)
}

const emit = defineEmits(['borrarTarjeta'])

const props = defineProps({
  name: {
    type: String,
    default: 'No Name'
  },
  mail: {
    type: String,
    default: 'No Mail'
  },
  price: {
    type: Number
  },
  index: {
    type: Number
  }
})
</script>

<template>
  <div class="overflow-hidden rounded shadow w-60 ml-14">
    <div class="inline-block" @click="mensaje">
      <img src="https://picsum.photos/48" alt="" />
    </div>
    <div class="inline-block pl-2">
      <h2 class="font-semibold text-md">{{ props.name }}</h2>
      <p class="text-xs">{{ props.mail }}</p>
      <p class="text-xs">El Precio es: {{ props.price }}</p>
    </div>
    <div
      class="inline-block px-2 py-0 ml-6 text-white bg-red-400 rounded in align-super hover:cursor-pointer hover:bg-red-600"
      @click="borrarTarjeta(props.index)"
    >
      X
    </div>
  </div>
</template>
