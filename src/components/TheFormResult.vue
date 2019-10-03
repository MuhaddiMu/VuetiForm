<template>
  <v-card class="mx-auto">
    <v-card-title>Result 😎</v-card-title>

    <v-form>
      <v-container>
        <v-text-field :counter="10" label="First Field" required></v-text-field>

        <v-text-field :counter="10" label="Second Field" required></v-text-field>
      </v-container>
    </v-form>
    <v-card-actions>
      <v-btn text>
        Give Me Code
        <v-icon>mdi-code-tags-check</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>
