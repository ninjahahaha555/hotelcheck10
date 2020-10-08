export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ชื่อ',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'นามสกุล', value: 'lastname' },
    { text: 'E-mail', value: 'email' },
    { text: 'วันเช็คอิน', value: 'checkin' },
    { text: 'วันเช็คเอาท์', value: 'checkout' },
    { text: 'จำนวนห้อง', value: 'sumperson' },
    { text: 'จำนวนผู้เข้าพัก', value: 'age' }
  ]
})
export const mutations = {
  input (state, { name, lastname, email, checkin, checkout, sumperson, age }) {
    state.data.push({ name, lastname, email, checkin, checkout, sumperson, age })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
