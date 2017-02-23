$(document).ready(function() {
    debugger;
    $('.slider').slider({
        full_width: true
    });
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
    $('select').material_select();
});
$("#editar").click(function(event) {
    $('#modal-editar').openModal();
});
$("#hist").click(function(event) {
    $('#modal-grade').openModal();
});
$("#config").click(function(event) {
    $('#modal-config').openModal();
});
$(".sbmais").click(function(event) {
    $('#modal1').openModal();
});
$(".fale-conosco").click(function(event) {
    $('#modal-fale-conosco').openModal();
});

//aula de desempenho com jquery :)
$(".play").on("click", function(e) {
    var $this = $(this);
    this.$siblings = this.$siblings || $this.siblings();
    this.$siblings.removeClass("t-active");
    $this.toggleClass("t-active");
});
//load para o feed de itens
debugger;
var options = [{
    selector: '#prod-list',
    offset: 120,
    callback: function() {
        Materialize.showStaggeredList("#prod-list");
    }
}, ];
Materialize.scrollFire(options);