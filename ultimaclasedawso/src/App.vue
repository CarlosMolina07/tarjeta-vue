<script setup>
//import CardComponent from './components/CardComponent.vue';
import { ref } from 'vue'
import { precioTotalSuma } from './sumUtils.js'
import CardComponent from '@/components/CardComponent.vue'

const users = ref([
  {
    name: 'Juana de Arco',
    mail: 'juanita@juanita.com',
    price: 100
  },
  {
    name: 'Pepito Perez',
    mail: 'pepito@perez.com',
    price: 100
  }
])

const borrarTarjeta = (index) => {
  console.log('Kill to', index)
  users.value.splice(index, 1)
  console.log(users)
}

const precioTotal = () => {
  return precioTotalSuma(users.value)
}

let name, mail, price

const addUser = () => {
  const newUser = {
    name: name,
    mail: mail,
    price: price
  }
  users.value.push(newUser)
}
</script>

<template>
  <h1 class="my-4 text-2xl ml-14">Tarjetas De Perfil</h1>

  <input
    type="text"
    v-model="name"
    placeholder="Escriba su nombre"
    class="mb-2 border rounded ml-14"
  /><br />
  <input type="text" v-model="mail" placeholder="Escriba su correo" class="border rounded ml-14" />
  <br />
  <input
    type="Number"
    v-model="price"
    placeholder="Escriba el precio"
    class="mt-2 border rounded ml-14"
  />
  <br />
  <button class="px-2 py-1 mt-4 mb-4 bg-green-200 rounded ml-14" @click="addUser">Añadir</button>
  <br />

  <div class="space-y-2">
    <CardComponent
      v-for="(user, index) in users"
      :key="index"
      :name="user.name"
      :mail="user.mail"
      :price="user.price"
      :index="index"
      @borrarTarjeta="borrarTarjeta"
    />
  </div>

  <div>
    <p class="mt-4 ml-14">La suma de todos los elementos es: {{ precioTotal() }}</p>
  </div>
</template>

<style scoped></style>
