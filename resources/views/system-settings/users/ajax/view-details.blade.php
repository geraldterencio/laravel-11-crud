<div>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" value="{{ $user->name }}" class="form-control" disabled="disabled">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Email </label>
                        <input type="text" name="email" class="form-control" value="{{ $user->email }}" id="check-email" disabled="disabled">
                        <span class="email-check"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
