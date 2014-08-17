$(document).ready(function(){
    $("form.destroy").submit(function(e) {
        if (!confirm('Are you sure?')) {
          e.preventDefault();
        }
    });
});
