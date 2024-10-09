<div class="modal fade" id="view-details" tabindex="-1" role="dialog" aria-labelledby="view-details" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" id="close-modal" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body view-details">

            </div>
            <div class="modal-footer">
                <button type="button" id="" class="btn btn-primary edit-details"><i class="bi bi-pencil-square"></i> Edit</button>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function(){
        $('div').on('click', '.edit-details', function(e){
            var id = this.id;
            $.ajaxSetup({
               headers: {
                   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
               }
            })
            $.ajax({
               url: '/app/system-settings/users/editDetails',
               type: "POST",
               data: {id:id},
               beforeSend: function() {
                    $('.loader').show();
               },
               success: function(response) {
                   if (response != '') {
                        $('.view-details').html(response.page);
                        $('.edit-details').attr("id", id);
                        $('.modal-title').text('Edit '+response.name.original+':');
                        $('.modal-footer').html('');
                        $('.modal-footer').append(
                            '<button type="button" class="btn btn-primary update"><i class="cil-save btn-icon" aria-hidden="true"></i> Update</button>'


                        );
                   }
               },
               complete: function() {
                    $('.loader').hide();
               }
            });
            e.preventDefault();
            return false;
        });

    });
</script>