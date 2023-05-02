<?php

namespace Symfony\UX\FSM\CKEditor\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
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

    public function getParent()
    {
        return TextareaType::class;
    }

    public function getBlockPrefix()
    {
        return 'ckeditor';
    }
}