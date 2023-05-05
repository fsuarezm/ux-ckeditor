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

namespace FSM\Symfony\UX\CKEditor\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CKEditorType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('language', '')
            ->setAllowedTypes('language', 'string');

        $resolver
            ->setDefault('ckeditor_options', [])
            ->setAllowedTypes('ckeditor_options', 'array');
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['language'] = $options['language'];
        $view->vars['ckeditor_options'] = \json_encode($options['ckeditor_options']);
    }

    public function getParent(): ?string
    {
        return TextareaType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'ckeditor';
    }
}