//organização da tabela com filtros
$(function() {

  var $table = $('table').tablesorter({
    theme: 'blue',
  });

  $('button[data-column]').on('click', function() {
    var $this = $(this),
      totalColumns = $table[''].config.columns,
      col = $this.data('userid', 'completed', 'id', 'title'),
      filter = [];

    filter[ col === ('all') ? totalColumns : col ] = $this.text();
    $table.trigger('search', [ filter ]);
    return false;
  });

});