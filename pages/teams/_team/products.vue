<template>
  <div class="container container--type-settings">
    <main class="card">
      <h1>Products</h1>
      <Loading v-if="loading" :message="loading" />
      <div v-else>Your team's products...</div>
    </main>
  </div>
</template>

<script lang="ts">
import Loading from "@/components/Loading.vue";
import Input from "@/components/form/Input.vue";
import SettingsSidebar from "@/components/sidebars/Settings.vue";
import Select from "@/components/form/Select.vue";
import ImageInput from "@/components/form/Image.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import Domains from "@/components/team/Domains.vue";
import { User } from "@/types/auth";
import {
  OrganizationsKV,
  Organization,
  emptyOrganization,
} from "@/types/manage";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { getAllCountries } from "countries-and-timezones";
import { mapGetters } from "vuex";
import { Component, Vue, Watch } from "vue-property-decorator";
library.add(faSync);

@Component({
  components: {
    SettingsSidebar,
    Loading,
    Input,
    Domains,
    FontAwesomeIcon,
    Select,
    ImageInput,
    Checkbox,
  },
  middleware: "auth",
})
export default class Products extends Vue {
  loading = "";
  organization: Organization = emptyOrganization;

  private created() {
    this.organization = {
      ...this.$store.getters["manage/organization"](this.$route.params.team),
    };
  }
}
</script>

<style lang="scss" scoped></style>
