<x-app-layout :categories="$categories">
	<div>
		<div class="card mb-3">
		    <div class="card-header">
		        <div class="d-flex justify-content-between">
		            <strong>USERS</strong>
		            <div>

	                   	<a href="/app/system-settings/users/exportCSV"><button class="btn btn-success text-white btn-sm" title="Export to CSV" ><i class="bi bi-file-earmark-arrow-down"></i> Export CSV</button></a>
	                   	<button type="button" class="btn btn-primary text-white btn-sm" title="Add" data-bs-toggle="modal" data-bs-target="#addModal"><span class="bi bi-plus-lg btn-icon"></span> Add</button>
		            </div>
		        </div>
		    </div>
		    <div class="card-body">
		        <div class="table-responsive m-3">
		            <table class="table table-bordered table-striped table-sm data-table">
		                <thead>
		                    <tr>
		                        <th>No</th>
		                        <th>Name</th>
		                        <th>Email</th>
		                        <th>Action</th>
		                    </tr>
		                </thead>
		                
		            </table>
		        </div>
		        <div class="d-flex justify-content-center">
		        </div>
		    </div>
		</div>
		@include('system-settings.users.modal.add-modal',['title'=>'User'])
		@include('system-settings.users.modal.view-modal-details')

		<script type="text/javascript">
		  	$(document).ready(function() {
			    $('.data-table').DataTable({
			        processing: true,
			        serverSide: true,
			        ajax: "{{ route('users.index') }}",
			        columns: [
			            {data: 'DT_RowIndex', orderable: false, searchable: false},
			            {data: 'name', name: 'name'},
			            {data: 'email', name: 'email'},
			            { data: null, title: 'Action', wrap: true, "render": function (item) { 
			            	return '<div class="btn-group"> <button type="button" id="' + item.id + '" class="btn btn-primary text-white view-modal-details"><i class="cil-folder-open "></i> View</button></div>' } 
			            },
			        ]
			    });

			    //view inventory type
			    $('div').on('click', '.view-modal-details', function(e){
			        $('#view-details').modal('show');
			        $('.view-details').html('');

			        var id = this.id;
			        $.ajaxSetup({
			           headers: {
			               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			           }
			        })
			        $.ajax({
			           url: '/app/system-settings/users/viewDetails',
			           type: "POST",
			           data: {id:id},
			           beforeSend: function() {
			                $('.loader').show();
			           },
			           success: function(response) {
			               if (response != '') {
			                    $('.view-details').html(response.page);
			                    $('.edit-details').attr("id", id);
			                    $('.modal-title').text('View '+response.name.original+':');
			               }
			           },
			           complete: function() {
			                $('.loader').hide();
			           }
			        });
			        e.preventDefault();
			        return false;
			    });

			    //view inventory type
			    $('div').on('click', '#close-modal', function(e){
			        $('#view-details').modal('hide');
			        
			        e.preventDefault();
			        return false;
			    });

		        
		  	});
		</script>
	</div>
</x-app-layout>
