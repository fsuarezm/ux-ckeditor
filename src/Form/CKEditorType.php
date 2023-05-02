<?php

namespace Symfony\UX\FSM\CKEditor\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CKEditorType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('language', '')
            ->setAllowedTypes('language', ['string'])
        ;
        $resolver
            ->setDefault('ckeditor_options', [])
            ->setAllowedTypes('ckeditor_options', ['array'])
        ;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['language'] = $options['language'];
        $view->vars['ckeditor_options'] = \json_encode($options['ckeditor_options'], JSON_FORCE_OBJECT);
    }

    public function getParent()
    {
        return TextareaType::class;
    }

    public function getBlockPrefix()
    {
        return 'ckeditor';
    }
}