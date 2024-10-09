<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <meta name="description" content="AccuBooks Plus - Accounting System ERP in the Philippines">
        <meta name="keywords" content="HTML, PHP, LARAVEL, LIVEWIRE, ACCUBOOKS PLUS, ACCOUNTING SYSTEM, ERP, PHILIPPINES" />
        <link rel="icon" href="{{ asset('images/logo/favicon.png') }}">
        <title>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" type="text/css"
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/core.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.css">

        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@coreui/icons@2.0.0-beta.3/css/all.min.css">
        <script defer src="https://unpkg.com/@alpinejs/mask@3.x.x/dist/cdn.min.js"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
        <script src="https://cdn.ckeditor.com/ckeditor5/28.0.0/classic/ckeditor.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

        <link href="https://cdn.datatables.net/1.11.4/css/dataTables.bootstrap5.min.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.11.4/js/dataTables.bootstrap5.min.js"></script>


        <style type="text/css">
        .column_search {
            vertical-align: top !important;
        }
        </style>

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/sass/app.scss', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased">
        @if(auth()->user() != null)
        <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
            <div class="sidebar-brand d-none d-md-flex">
                <div>
                    <h5>LMS</h5>
                </div>
            </div>

            <ul class="sidebar-nav" data-coreui="navigation" data-simplebar>
                <li class="nav-item"><a href="" style="font-size: 14px;"
                        class="nav-link">
                        <span class="nav-icon bi bi-speedometer mb-2"></span>DASHBOARD</a>
                </li>
                @include('sidenavigation.sidenavigation',['categories'=>$attributes['categories']])
            </ul>


            <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
        </div>
        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
            <header class="header header-sticky mb-4">
                <div class="container-fluid">
                    <div class='d-flex'>
                        <!-- <button class="header-toggler px-3" type="button"
                            onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
                            <svg class="icon icon-lg">
                                <i class="bi bi-list"></i>
                            </svg>

                        </button> -->


                    </div>
                    <a class="header-brand d-md-none" href="#">
                        <img class="img-fluid dash-logo-sm" style="width: 45px; height: 45px;"
                            src="{{url('images/logo/logo-small.png')}}" />
                    </a>
                    <ul class="header-nav ms-3 header-corner">

                        <div>

                        </div>
                        <li class="nav-item dropdown">
                            <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button"
                                aria-haspopup="true" aria-expanded="false">
                                <div class="d-flex justify-content-between">
                                    <div class="avatar avatar-md">
                                        <!-- User Image Icon -->
                                        @if (!auth()->user()->image)
                                        <img class="avatar-img"
                                            src="{{ url('images/placeholders/avatar-placeholder.png') }}" />
                                        @else
                                        <img style="object-fit:cover; border-radius: 50%; height: 38px; width: 38px;"
                                            class="avatar-img"
                                            src="{{ Storage::disk('obs')->url(env('OBS_FOLDER').'/'.Auth::user()->company_id.'images/'.Auth::user()->id.'/'.auth()->user()->image) }}" />
                                        @endif
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end pt-0">
                                <!-- Settings -->
                                <div class="dropdown-header bg-light py-2 px-2 d-flex">
                                    <div style="width: 20px;">
                                        @if (!auth()->user()->image)
                                        <img class="avatar-img" style="height: 17px; width: 17px; margin: 2px 10px 0 0;"
                                            src="{{ url('images/placeholders/avatar-placeholder.png') }}" />
                                        @else
                                        <img class="avatar-img"
                                            style="object-fit:cover; border-radius: 50%; height: 17px; width: 17px; margin: 2px 10px 0 0;"
                                            src="{{ Storage::disk('obs')->url(env('OBS_FOLDER').'/'.Auth::user()->company_id.'images/'.Auth::user()->id.'/'.auth()->user()->image) }}" />
                                        @endif
                                    </div>
                                    <div class="fw-semibold ps-2 pe-2">{{Auth::user()->username}}</div>
                                </div>
                                <!-- My Account -->
                                <a class="dropdown-item py-2 px-2"
                                    href="">
                                    <i class="c-icon me-2 bi-person-fill"></i> My Account
                                </a>
                                <!-- Log Out -->
                                <button type="submit" class="dropdown-item btn d-flex justify-content-start py-2 px-2"
                                    data-coreui-toggle="modal" data-coreui-target="#logoutModal">
                                    <i class="bi bi-box-arrow-right me-2"></i> Log Out
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>

            <div class="body flex-grow-1 px-3">
                <div class="loader">
                    <div class="image">
                        <img style='width:100px; height:100px; margin-left:-16px;' src="{{ asset('images/logo.png') }}" />
                        <br>
                        <div class="spin spinner"></div>
                    </div>
                </div>
                {{-- Body --}}
                {{ $slot }}

            </div>

            <footer class="footer d-flex justify-content-between mt-3">
            
            </footer>

            @else
            {{ $slot }}
            @endif


        </div>

        <script src=" {{ asset('js/core.js') }}" defer></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <script>
       

        window.addEventListener("load", function() {
            const loader = document.querySelector(".loader");
            loader.className += " hidden"; // class "loader hidden"
        });

        </script>
    </body>
</html>
