<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Convert } from "./Convert";
import { Welcome } from "./Welcome";



export default {
  setup() {
    const id = ref(0);
    let name = ref("");
    const route = useRoute();

    let cvn = new Convert();
    let ccc = new Welcome();

    ccc  = cvn.toWelcome("1", "Mr XXXX");

    ccc.id
    ccc.name

    onMounted(() => {

        name.value = "dfasdfasdf";

      console.log(route.params.slug[0]);
        console.log(ccc.name);
        console.log(ccc.id);
    });

    return { id };
  },
};
</script>
