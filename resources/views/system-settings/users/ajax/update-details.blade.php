<div>
    <div class="row">
        <div class="col-12">
            <input type="hidden" name="id" value="{{ $user->id }}">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="edit_name" value="{{ $user->name }}" class="form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Email </label>
                        <input type="text" name="edit_email" class="form-control" value="{{ $user->email }}" id="check-email">
                        <span class="email-check"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="module">
        $(document).ready(function(){
            $('div').on('change','#check-email',function(e){
                var email = $(this).val();
                $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    })
                    e.preventDefault();
                    $.ajax({
                         url: '/app/system-settings/users/checkEmailExists',
                         type: "POST",
                         data: {email:email},
                         success: function(response) {
                             if (response >= 1) {
                                $('.save').attr('disabled', 'disabled');
                                $('.email-check').append('<p style="font-size: 12px; color: #ff5d48; margin-top: 5px;">Email already exists.</p>');
                             }else{
                                $('.save').removeAttr('disabled', 'disabled');
                                $('.email-check').html('');
                             }
                         }
                    });

                    e.preventDefault();
                    return false;
            })
            if ( $('.update').length > 0 ) {
                $('.update').click(function(e){
                    var id          = $('input[name="id"]').val();
                    var name        = $('input[name="edit_name"]').val();
                    var email       = $('input[name="edit_email"]').val();
                    var formData    = '&id='+id+'&name='+name+'&email='+email;

                    Swal.fire({
                        title: "Are you sure?",
                        text: "Update data!!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((willSave) => {
                      if (willSave) {
                        $.ajaxSetup({
                           headers: {
                               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                           }
                        })
                        $.ajax({
                           url: "{{ route('users.update') }}",
                           type: "POST",
                           data: formData,
                           beforeSend: function() {
                              $('.save').attr('disabled', 'disabled');
                           },
                           success: function(response) {
                               if (response != '') {
                                  // $('#get-chart-of-account-table').DataTable().destroy();
                                  // getChartOfAccountTable();
                                  Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Record has been updated",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });

                                  $('.view-details').html(response.page);
                                  $('.edit-details').attr("id", id);
                                  $('.modal-title').text('View '+response.name.original+':');
                                  $('.modal-footer').html('');
                                  $('.modal-footer').append(
                                      '<button type="button" class="btn btn-primary update"><i class="fa fa-floppy-o" aria-hidden="true"></i>Update</button>'


                                  );
                               }
                           },
                           complete: function() {
                              $('.save').removeAttr('disabled');
                           }
                        });
                      } else {
                        swal("Save Aborted");
                      }
                    });
                    e.preventDefault();
                    return false;
                })
            }
        });
    </script>
</div>
