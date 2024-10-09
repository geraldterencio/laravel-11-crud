<div>
    <!-- Modal -->
    <div class="modal fade" id="addModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add {{ $title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="add-form">
                        @csrf
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Name <span style="color: red">*</span></label>
                                    <input type="text" name="name" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Email <span style="color: red">*</span></label>
                                    <input type="email" name="email" class="form-control" id="check-email" required>
                                    <span class="email-check"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label>Password <span style="color: red">*</span></label>
                                    <input type="password" name="password" class="form-control" required>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2" >
                            <div class="col-12"> 
                                <button type="submit" class="btn btn-primary save"><i class="cil-save btn-icon" aria-hidden="true"></i> Save</button>
                            </div>
                        </div>
                    </form>
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
            if ( $('#add-form').length > 0 ) {
                $('#add-form').submit(function(e){
                    var formData = $(this).serialize();

                    Swal.fire({
                        title: "Are you sure?",
                        text: "Saving data!!",
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
                           url: '/app/system-settings/users/create',
                           type: "POST",
                           data: formData,
                           beforeSend: function() {
                              $('.save').attr('disabled', 'disabled');
                           },
                           success: function(response) {
                               if (response != '') {
                                  // $('#get-chart-of-account-table').DataTable().destroy();
                                  // getChartOfAccountTable();
                                  $('#add-form').trigger("reset");
                                  Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Record has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
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