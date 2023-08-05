@props([
    'statePath' => null,
])

<x-filament-tiptap-editor::button
    action="openModal()"
    label="Insert Math Equation"
    icon="variable"
    x-data="{
        openModal() {
            $wire.dispatchFormEvent('tiptap::insertHtml', '{{ $statePath }}', '');
        }
    }"
/>
