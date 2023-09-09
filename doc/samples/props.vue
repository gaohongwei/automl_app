<template>
  <div>
    <p>Prop Value: {{ propValue }}</p>
    <p>State Value: {{ stateValue }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      propValue: String,
    },
    data() {
      return {
        stateValue: this.propValue, // Initialize stateValue with the value of propValue
      };
    },
    created() {
      console.log('Prop Value:', this.propValue);
      console.log('State Value:', this.stateValue);
    },
  };
  /*
  If you want to use the value of a prop in the component's state for some reason, you can initialize the state property with the value of the prop in the created or data section of the component. Here's how you can access props in the component's state:
  */
</script>