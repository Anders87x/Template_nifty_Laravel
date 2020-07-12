@extends('principal')
@section('contenido')
    <template v-if="menu==1">
        <buttons-component></buttons-component>
    </template>

    <template v-if="menu==2">
        <panels-component></panels-component>
    </template>

    <template v-if="menu==3">
        <modals-component></modals-component>
    </template>
@endsection
