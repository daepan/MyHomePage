<template>
  
        <div>
   <main-header />
      <div class="page-container">
        <md-app>
          <md-app-toolbar class="md-primary">
            <span class="md-title font-weight-medium font-italic">Welcome My FrontEnd page</span>
          </md-app-toolbar>
      </md-app>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  components: {
    'main-header': Header,
  },
};
</script>
