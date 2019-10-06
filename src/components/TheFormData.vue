<template>
  <v-card class="mx-auto">
    <v-tabs>
      <v-tab @click="TabToggle = 'TextField'">Text Fields</v-tab>
      <v-tab @click="TabToggle = 'Textarea'">Textarea</v-tab>
      <v-tab>Form</v-tab>
    </v-tabs>
    <v-container>
      <div v-if="TabToggle == 'TextField'">
        <v-row
          align="center"
          justify="center"
          v-for="(Field, index) in Fields"
          :key="index"
        >
          <v-flex row v-if="Field.Type == 'TextField'">
            <v-col cols="12" md="3">
              <v-text-field
                label="Label"
                v-model="Field.Label"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-select
                v-model="Field.Rules"
                :menu-props="{ top: true, offsetY: true }"
                :items="['Text', 'Number', 'Email', 'Password']"
                label="Rules"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-switch
                v-model="Field.FiledRequired"
                label="Required"
              ></v-switch>
            </v-col>

            <v-col class="mt-4" cols="12" md="3">
              <v-slider
                label="Max"
                :thumb-size="24"
                :max="100"
                thumb-label
                :min="0"
                v-model="Field.Counter"
              ></v-slider>
            </v-col>
          </v-flex>
        </v-row>

        <v-btn @click="NewField" text>New Text Field</v-btn>
      </div>

      <div v-if="TabToggle == 'Textarea'">
        <v-row
          align="center"
          justify="center"
          v-for="(Field, index) in Fields"
          :key="index"
        >
          <v-flex row v-if="Field.Type == 'Textarea'">
            <v-col cols="12" md="3">
              <v-text-field
                label="Label"
                v-model="Field.Label"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-select
                v-model="Field.Rules"
                :menu-props="{ top: true, offsetY: true }"
                :items="['Deafult', 'Solo', 'Filled', 'Outlined']"
                label="Type"
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <v-switch
                v-model="Field.FiledRequired"
                label="Required"
              ></v-switch>
            </v-col>

            <v-col class="mt-4" cols="12" md="3">
              <v-slider
                label="Max"
                :thumb-size="24"
                :max="500"
                thumb-label
                :min="0"
                v-model="Field.Counter"
              ></v-slider>
            </v-col>
          </v-flex>
        </v-row>
        <v-btn @click="NewTextArea" text>New Textarea Field</v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    TabToggle: "TextField",
    Fields: [],
    Textarea: []
  }),
  methods: {
    NewField() {
      this.Fields.push({
        Type: "TextField",
        Label: "",
        TogglePassword: false,
        FiledRequired: false,
        Counter: "25",
        Rules: "",
        DefaultVal: ""
      })
    },

    NewTextArea() {
      this.Fields.push({
        Type: "Textarea",
        Label: "",
        FiledRequired: false,
        Counter: "0",
        Rules: "",
        DefaultVal: ""
      })
    }
  },
  updated() {
    this.$root.$emit("TextField", this.Fields)
  }
}
</script>
