<template>
  <div>
    <v-card class="mx-auto">
      <v-card-title>Result 😎</v-card-title>

      <v-form ref="Form">
        <v-container class="text-center">
          <v-flex v-for="(Field, index) in Fields" :key="index">
            <v-text-field
              :dense="FormSettings.Dense === true"
              :filled="FormSettings.InputStyle === 'Filled' ? true : false"
              :outlined="FormSettings.InputStyle === 'Outlined' ? true : false"
              :solo="FormSettings.InputStyle === 'Solo' ? true : false"
              v-if="Field.Type === 'TextField' && Field.Rules !== 'Password'"
              v-model="Field.DefaultVal"
              :label="Field.Label"
              :type="Field.Rules"
              :min="0"
              :counter="Field.Counter"
              :rules="Rules(Field)"
            ></v-text-field>

            <v-text-field
              :dense="FormSettings.Dense === true"
              :filled="FormSettings.InputStyle === 'Filled' ? true : false"
              :outlined="FormSettings.InputStyle === 'Outlined' ? true : false"
              :solo="FormSettings.InputStyle === 'Solo' ? true : false"
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
              :solo="Field.Rules === 'Solo' ? true : false"
              :min="0"
              :label="Field.Label"
              :counter="Field.Counter"
              :value="Field.DefaultVal"
              :rules="Rules(Field)"
            ></v-textarea>
          </v-flex>

          <v-btn
            v-if="Fields.length > 0"
            :disabled="!Valid"
            color="success"
            class="mr-4"
            @click="Validate"
            >Validate</v-btn
          >

          <v-btn
            v-if="Fields.length > 0"
            color="error"
            class="mr-4"
            @click="Reset"
            >Reset Form</v-btn
          >
          <v-btn
            v-if="Fields.length > 0"
            color="warning"
            @click="ResetValidation"
            >Reset Validation</v-btn
          >
        </v-container>
      </v-form>
      <v-card-actions>
        <v-btn v-if="Fields.length > 0" @click="GiveMeCode" text>
          Give Me Code
          <v-icon>mdi-code-tags-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="Dialog" max-width="700">
      <v-card shaped>
        <v-card-title class="headline"
          >VuetiForm
          <v-btn
            icon
            href="https://github.com/MuhaddiMu/VuetiForm"
            target="_blank"
            rel="noopener noreferrer"
            ><v-icon>mdi-github-circle</v-icon></v-btn
          ></v-card-title
        >

        <v-card-text>
          <!-- <PrismEditor readonly :code="SourceCode" language="vue"></PrismEditor> -->
          <pre>&lt;template&gt;
    &lt;v-form ref=&quot;Form&quot;&gt; 
        &lt;v-container class=&quot;text-center&quot;&gt;<span v-for="(Field, index) in Fields" :key="index">
            xD</span>
        &lt;/v-container&gt;
    &lt;/v-form&gt;
&lt;/template&gt;</pre>
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn color="green darken-1" text @click="Dialog = false">
            Copy to Clipboard <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PrismEditor from "vue-prism-editor"
export default {
  components: {
    PrismEditor
  },

  data: () => ({
    SourceCode: ``,
    Dialog: false,
    Valid: true,
    Fields: [],
    FormSettings: null
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
    },
    GiveMeCode() {
      this.Dialog = true
      this.SourceCode =
        `<template>
     <v-form ref="Form">
         <v-container class="text-center">
         ` +
        this.Fields.map(function(Field) {
          return [
            '    <v-text-field label="' + Field.Label + '"' + "></v-text-field>"
          ]
        }) +
        `
        </v-container>
     </v-form>
 </template>
`
    }
  },

  mounted() {
    this.$root.$on("TextField", data => {
      this.Fields = data
    })

    this.$root.$on("FormSettings", data => {
      this.FormSettings = data
    })
  }
}
</script>
