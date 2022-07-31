<template>
  <div class="container container--type-settings">
    <main class="card">
      <div class="row">
        <h1>Jobs</h1>
        <div class="text text--align-right">
          <button
            aria-label="Refresh"
            data-balloon-pos="down"
            class="button button--type-icon"
            @click="load"
          >
            <font-awesome-icon
              title="Refresh"
              class="icon"
              icon="sync"
              :spin="!!loading"
              fixed-width
            />
          </button>
        </div>
      </div>
      <table v-if="jobs && jobs.data" class="table">
        <thead>
          <!-- <th>Name</th>
          <th>Joined</th>
          <th>Role</th> -->
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(job, index) in jobs.data" :key="`${job.id}_${index}`">
            <!-- <td><User :user="job.user" /></td>
            <td><TimeAgo :date="job.createdAt" /></td>
            <td>{{ membershipRoles[member.role] || member.role }}</td> -->
            <td class="text text--align-right">
              <div v-if="user">
                <router-link
                  v-if="user && member.userId !== user.id"
                  :to="`/teams/${$route.params.team}/members/${member.id}`"
                  aria-label="Edit membership"
                  data-balloon-pos="up"
                  class="button button--type-icon"
                >
                  <font-awesome-icon
                    class="icon"
                    icon="pencil-alt"
                    fixed-width
                  />
                </router-link>
                <button
                  aria-label="Remove"
                  data-balloon-pos="up"
                  class="button button--color-danger button--type-icon"
                  @click="showDelete = member"
                >
                  <font-awesome-icon
                    title="Remove"
                    class="icon icon--color-danger"
                    icon="trash"
                    fixed-width
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Loading v-else-if="loading" :message="loading" />
      <div class="pagination text text--align-center">
        <button
          v-if="jobs && jobs.hasMore"
          class="button"
          :disabled="loadingMore"
          @click="loadMoreJobs"
        >
          <span>Load more jobs</span>
          <font-awesome-icon
            v-if="!loadingMore"
            class="icon"
            icon="arrow-down"
          />
          <font-awesome-icon
            v-else
            class="icon icon--ml-2 icon--color-light"
            icon="sync"
            spin
          />
        </button>
      </div>
      <h2>Convert PDF to Table</h2>
      <p>
        Use this form to convert PDF to Table.
      </p>
      <Loading v-if="uploading" message="Uploading file..." />
      <form v-else v-meta-ctrl-enter="uploadFile" @submit.prevent="uploadFile">
        <Input
          ref="fileRef"
          :value="file"
          placeholder="Select your PDF file"
          label="Select your PDF file"
          required
          multiple
          type="file"
        />

        <button class="button">Upload</button>
      </form>
      <transition name="modal">
        <Confirm v-if="showDelete" :on-close="() => (showDelete = null)">
          <h2>Are you sure you want to remove {{ showDelete.user.name }}?</h2>
          <p>
            Removing someone from your organization is not reversible, and
            you'll need to invite them again if you change your mind.
          </p>
          <p>
            If they have any organization-specific data, that will also be
            deleted.
          </p>
          <button
            class="button button--color-danger button--state-cta"
            @click="deleteMembership(showDelete.id)"
          >
            Yes, remove {{ showDelete.user.nickname }}
          </button>
          <button type="button" class="button" @click="showDelete = null">
            No, don't remove
          </button>
        </Confirm>
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import Loading from "@/components/Loading.vue";
import User from "@/components/User.vue";
import TimeAgo from "@/components/TimeAgo.vue";
import Confirm from "@/components/Confirm.vue";
import Input from "@/components/form/Input.vue";
import Select from "@/components/form/Select.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import { Email } from "@/types/settings";
import locale from "@/locales/en";
import { Pdf2TableJobs, emptyPagination } from "@/types/manage";
import { User as UserType } from "@/types/auth";
import {
  faTrash,
  faPencilAlt,
  faArrowDown,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { getAllCountries } from "countries-and-timezones";
import { mapGetters } from "vuex";
import { Component, Vue, Watch } from "vue-property-decorator";
library.add(faTrash, faPencilAlt, faArrowDown, faSync);

@Component({
  components: {
    TimeAgo,
    User,
    Loading,
    Input,
    Select,
    Checkbox,
    FontAwesomeIcon,
    Confirm,
  },
  computed: mapGetters({
    user: "auth/user",
  }),
  middleware: "auth",
})
export default class ManageMembers extends Vue {
  jobs: Pdf2TableJobs = emptyPagination;
  user!: UserType;
  loading = "";
  uploading = false;
  showDelete = null;
  loadingMore = false;
  file = "";

  private created() {
    this.jobs = {
      ...this.$store.getters["manage/pdf2TableJobs"](this.$route.params.team),
    };
  }

  private mounted() {
    this.load();
  }

  private load() {
    this.loading = "Loading members";
    this.$store
      .dispatch("manage/getPdf2TableJobs", { team: this.$route.params.team })
      .then((jobs) => (this.jobs = { ...jobs }))
      .catch(() => {})
      .finally(() => (this.loading = ""));
  }

  private loadMoreJobs() {
    this.loadingMore = true;
    this.$store
      .dispatch("manage/getPdf2TableJobs", {
        team: this.$route.params.team,
        start: this.$store.state.manage.pdf2TableJobs[this.$route.params.team]
          .next,
      })
      .then((memberships) => {
        this.jobs = {
          ...this.$store.getters["manage/pdf2TableJobs"](
            this.$route.params.team
          ),
        };
      })
      .catch(() => {})
      .finally(() => (this.loadingMore = false));
  }

  private filterHTMLCollection(
    collection: HTMLCollection,
    predicate: (any) => boolean
  ) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }

  private getFiles(): File[] {
    const vueElement = this.$refs.fileRef as Vue;
    const fileElement: any = this.filterHTMLCollection(
      vueElement.$el.children,
      (ele) => ele.type === "file"
    );
    return fileElement?.files || [];
  }

  private uploadFile() {
    this.uploading = true;
    const files = this.getFiles();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    this.$store
      .dispatch("manage/createPdf2TableJob", {
        team: this.$route.params.team,
        formData,
      })
      .then((jobs) => (this.jobs = { ...jobs }))
      .catch(() => {})
      .finally(() => (this.uploading = false));
  }

  private deleteMembership(id: number) {
    //   this.showDelete = null;
    //   this.loading = "Deleting membership";
    //   this.$store
    //     .dispatch("manage/deleteMembership", {
    //       id,
    //       team: this.$route.params.team,
    //     })
    //     .then((memberships) => {
    //       this.memberships = { ...memberships };
    //       if (this.user && this.user.id && this.user.id === id) {
    //         // You just left the team
    //         this.$router.push(
    //           `/users/${this.user.username || this.user.id}/teams`
    //         );
    //       }
    //     })
    //     .catch(() => {})
    //     .finally(() => (this.loading = ""));
  }
}
</script>
