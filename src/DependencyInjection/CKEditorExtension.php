<?php

namespace Symfony\UX\FSM\CKEditor\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\UX\FSM\CKEditor\Form\CKEditorType;

/**
 * @internal
 */
class CKEditorExtension extends Extension implements PrependExtensionInterface
{
    public function prepend(ContainerBuilder $container)
    {
        // Register the Dropzone form theme if TwigBundle is available
        $bundles = $container->getParameter('kernel.bundles');

        if (!isset($bundles['TwigBundle'])) {
            return;
        }

        $container->prependExtensionConfig('twig', ['form_themes' => ['@CKEditor/form_theme.html.twig']]);
    }

    public function load(array $configs, ContainerBuilder $container)
    {
        $container
            ->setDefinition('form.ckeditor', new Definition(CKEditorType::class))
            ->addTag('form.type')
            ->setPublic(false)
        ;
    }
}