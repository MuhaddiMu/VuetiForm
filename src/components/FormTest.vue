<template>
    <v-form ref="Form"> 
        <v-container class="text-center"> 
          <v-text-field
              
              
              label=""
              
              :min="0"
              :counter="25"
              v-model="Field_1"
              :rules="Rule_1"
          ></v-text-field>
          
        </v-container>
    </v-form>
</template>

<script>
  export default { 
    data: () => ({
      Field_1: '',
      Rule_1: [ v => v.length <= 25 || "Max 25 characters",  ],
      
    })
  }
</script>