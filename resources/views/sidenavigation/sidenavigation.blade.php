<div>
    <!-- Walk as if you are kissing the Earth with your feet. - Thich Nhat Hanh -->
    @foreach($categories as $c => $category)
    <li class="nav-group {{ request()->is($category->name) ? 'show' : '' }}">
        <a class="nav-link nav-group-toggle" style="font-size: 14px;">
        <span class="nav-icon bi bi-gear-wide mb-2"></span>
        {{ $category->name }}
        </a>
        @foreach($category->modules as $m => $module)
        <ul class="nav-group-items">
            @if(count($module->submodules)>= 1)
                <li class="nav-group {{request()->is($module->url) ? 'show' : ''}}
                {{request()->is('app/configurations/wht/*') ? 'show' : ''}}">
                    <a class="nav-link nav-group-toggle" style="padding-left:4.5rem;">{{ $module->name }}</a>
                    <ul class="nav-group-items">
                        @foreach($module->submodules as $sm => $submodule)
                        <li class="nav-item"><a style="padding-left:5.5rem;" class="nav-link {{request()->is($submodule->url) ? 'active' : ''}}" href="{{route($submodule->route_name)}}">{{ $submodule->name }}</a></li>
                        @endforeach
                    </ul>
                </li>
            @else
                <li class="nav-item"><a style="padding-left:4.5rem;" class="nav-link {{request()->is($module->url) ? 'active' : ''}}" href="{{route($module->route_name)}}">{{ $module->name }}</a></li>
            @endif
        </ul>
        @endforeach
    </li>
    @endforeach
</div>