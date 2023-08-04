<?php

namespace FilamentTiptapEditor\Actions;

use Filament\Forms\ComponentContainer;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Components\Textarea;
use FilamentTiptapEditor\TiptapEditor;

class HtmlAction extends Action
{
    public static function getDefaultName(): ?string
    {
        return 'filament_tiptap_html';
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->mountUsing(function (TiptapEditor $component, ComponentContainer $form) {
            return $form->fill([
                'html' => ''
            ]);
        });

        $this->modalHeading('Insert HTML code');

        $this->form([
            Textarea::make('html')
                ->label('Html Code')
                ->rows(10)
        ]);

        $this->action(function (TiptapEditor $component, $data) {
            $component->getLivewire()->dispatchBrowserEvent('insert-html', [
                'statePath' => $component->getStatePath(),
                'html' => $data['html']
            ]);

            $component->state($data['html']);
        });
    }
}
