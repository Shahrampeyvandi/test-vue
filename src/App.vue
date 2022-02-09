<template>
  <div class="container mx-auto">
    <div class="mt-10 sm:mt-0">
      <div class="grid grid-cols-6">
        <div class="col-start-2 col-span-4">
          <h2 class="mb-3 text-left text-3xl font-extrabold text-gray-900">
            Auto Complete
          </h2>
          <form action="#" method="POST" autocomplete="on">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  @input="createUser"
                  v-model="username"
                  name="username"
                  id="username"
                  type="text"
                  required
                  class="
                    appearance-none
                    rounded-none
                    relative
                    block
                    w-full
                    px-3
                    py-2
                    border border-gray-300
                    placeholder-gray-500
                    text-gray-900
                    rounded-t-md
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    focus:z-10
                    sm:text-sm
                  "
                  placeholder="Enter User Name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseRepository from "./baseRepository/BaseRepository";
export default {
  name: "App",
  data() {
    return {
      username: "",
      timoutRequest: null,
    };
  },
  methods: {
    createUser() {
      if (this.timoutRequest) clearTimeout(this.timoutRequest);
      this.timoutRequest = setTimeout(() => {
        const baseUrl = "https://6203aa9b4d21c200170b9f42.mockapi.io";
        const resource = "/api/v1/users";
        const body = {
          name: this.username, // or event.target.value
        };

        BaseRepository.post(baseUrl + resource, body).then((res) => {
          console.log(res);
        });
      }, 1000);
    },
  },
};
</script>

<style>
</style>
