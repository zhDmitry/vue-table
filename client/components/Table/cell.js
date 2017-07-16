import { mapState } from 'vuex'
export default {
  methods: {
    increment (e) {
      this.$store.commit('update', {
        key: this.key,
        value: e.target.value
      })
    }
  },
  computed: {
    key () {
      return this.$props.x + '-' + this.$props.y
    },
    ...mapState({
      value (state) {
        return state.cells[this.key]
      }
    })
  },
  props: ['x', 'y'],
  render (h) {
    console.log('rerender', this.key)
    return (
      <div>
        {this.value}
        <input placeholder={'qwer'} on-change={this.increment} />
      </div>
    )
  }
}
