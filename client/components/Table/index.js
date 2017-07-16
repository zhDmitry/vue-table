import Cell from './cell'

const cells = new Array(10).fill(0).map(el => new Array(10).fill(0))

export default {
  methods: {

  },
  render (h) {
    console.log('render')
    return (
      <div class='counter-wrapper'>
        <table>
          <thead>
            {cells.map((el, i) =>
              <th key={i}>
                {i}
              </th>
            )}
          </thead>
          <tbody>
            {cells.map((e, x) =>
              <tr key={x}>
                {e.map((el, y) =>
                  <td>
                    <Cell key={y} x={x} y={y} />
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
