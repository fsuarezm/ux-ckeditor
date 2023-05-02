<?php

namespace Symfony\UX\FSM\CKEditor;

use Symfony\Component\HttpKernel\Bundle\Bundle;

/**
 * @final
 */
class CKEditorBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}