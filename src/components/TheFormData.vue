  <template>
  <v-card class="mx-auto">
    <v-tabs>
      <v-tab>Text Fields</v-tab>
      <v-tab>Textarea</v-tab>
      <v-tab>Form</v-tab>
    </v-tabs>
    <v-container>
      <v-row align="center" justify="center" v-for="(Field, index) in Fields" :key="index">
        <v-col cols="12" md="3">
          <v-text-field label="Label" v-model="Field.Label" required></v-text-field>
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
          <v-switch v-model="Field.FiledRequired" label="Required"></v-switch>
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
      </v-row>

      <v-btn @click="NewField" text>New Text Field</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    Fields: [
    ]
  }),
  methods: {
    NewField() {
      this.Fields.push({ Type: "TextField", Label: "", TogglePassword: false, FiledRequired: false, Counter: '25', Rules: '', DefaultVal: '' })
    }
  },
  updated() {
    this.$root.$emit('eventing', this.Fields);
  }
};
</script>
