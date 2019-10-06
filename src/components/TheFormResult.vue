<template>
  <v-card class="mx-auto">
    <v-card-title>Result 😎</v-card-title>

    <v-form ref="Form">
      <v-container class="text-center">
        <v-flex v-for="(Field, index) in Fields" :key="index">
          <v-text-field
            v-if="Field.Type === 'TextField' && Field.Rules !== 'Password'"
            v-model="Field.DefaultVal"
            :label="Field.Label"
            :type="Field.Rules"
            :min="0"
            :counter="Field.Counter"
            :rules="Rules(Field)"
          ></v-text-field>

          <v-text-field
            v-model="Field.DefaultVal"
            v-if="Field.Rules === 'Password'"
            :append-icon="Field.TogglePassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="Field.TogglePassword ? 'text' : 'password'"
            :label="Field.Label"
            hint="At least 8 characters"
            :counter="Field.Counter"
            :rules="Rules(Field)"
            @click:append="Field.TogglePassword = !Field.TogglePassword"
          ></v-text-field>

          <v-textarea
            v-if="Field.Type == 'Textarea'"
            :filled="Field.Rules === 'Filled' ? true : false"
            :outlined="Field.Rules === 'Outlined' ? true : false"
            :min="0"
            :solo="Field.Rules === 'Solo' ? true : false"
            :label="Field.Label"
            :counter="Field.Counter"
            :value="Field.DefaultVal"
            :rules="Rules(Field)"
          ></v-textarea>
        </v-flex>

        <v-btn
          v-if="Fields"
          :disabled="!Valid"
          color="success"
          class="mr-4"
          @click="Validate"
          >Validate</v-btn
        >

        <v-btn v-if="Fields" color="error" class="mr-4" @click="Reset"
          >Reset Form</v-btn
        >
        <v-btn v-if="Fields" color="warning" @click="ResetValidation"
          >Reset Validation</v-btn
        >
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
    Valid: true,
    Fields: null,
    Textareas: null
  }),

  methods: {
    Validate() {
      if (this.$refs.Form.validate()) {
        this.snackbar = true
      }
    },

    Reset() {
      this.$refs.Form.reset()
    },

    ResetValidation() {
      this.$refs.Form.resetValidation()
    },

    Rules(Field) {
      var RulesArray = []

      if (Field.FiledRequired) {
        RulesArray.push(v => !!v || Field.Label + " is required")
      }

      if (Field.Counter > 0) {
        if (Field.DefaultVal) {
          RulesArray.push(
            v =>
              v.length <= Field.Counter ||
              "Max " + Field.Counter + " characters"
          )
        }
      }

      if (Field.Rules == "Email") {
        RulesArray.push(
          v =>
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
            ) || "E-mail must be valid"
        )
      }

      if (Field.Rules == "Password") {
        if (Field.DefaultVal) {
          RulesArray.push(v => v.length >= 8 || "Min 8 characters")
        }
      }

      return RulesArray
    }
  },

  mounted() {
    this.$root.$on("TextField", data => {
      this.Fields = data
    })
  }
}
</script>
