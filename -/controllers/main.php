<?php namespace plugins\eyecon\colorpicker\controllers;

class Main extends \Controller
{
    public function bind()
    {
        $this->css('colorpicker');
        $this->js('colorpicker');

        $this->widget(':' . $this->data['selector'], [
            'path'           => $this->_caller()->_p($this->data['path']),
            'data'           => $this->data('data'),
            'targetSelector' => $this->data['target_selector'] ?? $this->data['selector'],
            'color'          => $this->data['color'] ?? '000000',
        ]);
    }

    public function view()
    {
        $id = k(8);

        $class = $this->data['class'] ?? '';
        $hover = $this->data['hover'] ?? '';
        $content = $this->data['content'] ?? '';

        $this->data['selector'] = '#' . $id;

        $this->bind();

        return $this->c('\std\ui tag:view', [
            'attrs'   => [
                'id'    => $id,
                'class' => $class,
                'hover' => $hover
            ],
            'content' => $content
        ]);
    }
}