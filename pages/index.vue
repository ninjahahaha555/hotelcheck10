<template>
  <v-form v-model="valid">
    <v-container>
      <v-card>
        <h1 align="center">
          จองห้องพัก
        </h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="name"
              :rules="rules"
              hide-details="auto"
              label="ชื่อ"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="lastname"
              :rules="rules"
              hide-details="auto"
              label="นามสกุล"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              type="email"
              :rules="rules"
              hide-details="auto"
              label="E-mail"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="checkin"
                  label="Check In Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  filled
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="checkin"
                @input="menu1 = false"
              />
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="checkout"
                  label="Check Out Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  filled
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="checkout"
                @input="menu2 = false"
              />
            </v-menu>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="sumperson"
              type="number"
              :rules="rules"
              label="จำนวนห้อง"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="age"
              type="number"
              :rules="rules"
              label="จำนวนผู้เข้าพัก"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                v-bind="attrs"
                v-on="on"
                @click="validate"
              >
                Commit
              </v-btn>
            </template>

            <v-card v-if="(name != null & lastname != null & email != null & sumperson != null & age != null)">
              <v-card-title class="headline">
                ทำการจองสำเร็จ
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  ยืนยัน
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card v-if="(name == null || lastname == null || email == null || sumperson == null || age == null)">
              <v-card-title class="headline">
                ข้อมูลไม่ถูกต้อง
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="error"
                  text
                  @click="dialog = false"
                >
                  ยืนยัน
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <br>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      name: null,
      lastname: null,
      email: null,
      sumperson: null,
      age: null,
      rules: [
        value => !!value || 'Required.'
      ],
      checkin: new Date().toISOString().substr(0, 10),
      checkout: new Date().toISOString().substr(0, 10),
      menu: false,
      items: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    validate () {
      if (this.name != null & this.lastname != null & this.email != null & this.sumperson != null & this.age != null) {
        const name = this.name
        const lastname = this.lastname
        const email = this.email
        const checkin = this.checkin
        const checkout = this.checkout
        const sumperson = this.sumperson
        const age = this.age
        this.$store.commit('input', {
          name,
          lastname,
          email,
          checkin,
          checkout,
          sumperson,
          age
        })
      }
    }
  }
}
</script>

<style>
.theme--dark.v-application {
  background-image: url("https://cdn.discordapp.com/attachments/392353546332405763/763456399841034240/building-background.jpg");
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card{
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 18px;
  background-color: beige;
}
</style>
