<?php

/*
 * This file is part of fsuarezm/ux-ckeditor
 *
 * (c) Francisco Suárez Mulero
 * @author: Francisco Suárez Mulero
 * @email: fsuarezm@gmail.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace FSM\Symfony\UX\CKEditor\DependencyInjection;

use FSM\Symfony\UX\CKEditor\Form\CKEditorType;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

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