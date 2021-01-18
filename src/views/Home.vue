<template>
  <div class="home">
    <h3 ref="p">My name is {{name}} and my age is {{age}}</h3>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name">
  </div>
  <div>
  <hr />
  <h1>Refs</h1>
  <h3>{{ninjaOne.name2}} - {{ninjaOne.age1}}</h3>
  <button @click="updateNinjaOne">Click to update</button>
  <hr>
  <h1>Reactive</h1>
  <h3>{{ninjaTwo.name2}} - {{ninjaTwo.age1}}</h3>
  <button @click="updateNinjaTwo">Click to update</button>
  </div>
  <input type="text" v-model="search">
  <p>search term - {{search}}</p>
  <div v-for="getName in matchingNames" :key="getName">
    {{getName}}
  </div>

</template>

<script>
// @ is an alias to /src
import { ref, reactive, computed } from 'vue'
export default {
  name: 'Home',
  setup() {
    console.log(this)

    const p = ref(null)

    const name = ref('Joney spark')
    const age = ref(30)

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      // p.value.textContent = 'Hello Joney'
      name.value = "Boney"
      age.value = 35
    }

    const ninjaOne = ref({name2: 'Rahul', age1: 33})
    const ninjaTwo = reactive({name2: 'Rahul', age1: 35})

    const updateNinjaOne = () => {
      ninjaOne.value.age1 = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age1 = 45
    }
    const search = ref('')

    const allNames = ref(['joney', 'spark', 'boney', 'bspark', 'lucky', 'lspark'])

    const matchingNames = computed(() => {
      return allNames.value.filter((name) => name.includes(search.value))
    })
    
    return { name, age, handleClick, p, ninjaOne, updateNinjaOne, ninjaTwo,updateNinjaTwo, allNames, search, matchingNames }
  }
}
</script>
