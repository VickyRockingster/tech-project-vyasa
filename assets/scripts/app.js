'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(document).ready(function () {
    // Filter table rows based on searched term
    $('#search').on('keyup', function () {
      const term = $(this).val().toLowerCase()
      $('table tbody tr').each(function () {
        const $row = $(this)
        const name = $row.find('td:nth-child(2)').text().toLowerCase()
        name.search(term) < 0 ? $row.hide() : $row.show()
      })
    })
  })
})
