<template>
  <v-layout wrap>
    <v-flex col-md-6>
      <TheFormData />
    </v-flex>
    <v-flex col-md-6>
      <TheFormResult />
    </v-flex>
  </v-layout>
</template>

<script>
import TheFormData from './TheFormData'
import TheFormResult from './TheFormResult'
export default {
  components: {
    TheFormData,
    TheFormResult
  },
  data: () => ({

  }),
};
</script>
