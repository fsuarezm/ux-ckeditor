# fsuarezm/ux-ckeditor

## Installation

### Download using composer
Add repository url to your composer.json
```json
    "repositories": {
        "fsuarezm/ux-ckeditor": {
            "type": "github",
            "url": "https://github.com/fsuarezm/ux-ckeditor.git"
        }
    }
```

Require the bundle with composer:
```bash
$ composer require fsuarezm/ux-ckeditor
```

### Enable the bundle

Enable the bundle in the kernel:

```php
// config/bundles.php
return [
    // ...
    FSM\Symfony\UX\CKEditor\CKEditorBundle::class => ['all' => true],
];
```

### Enable stimulus controller

Add package to package.json:

```
  // package.json
  // ...
  "devDependencies": {
    // ...
    "@fsm/ux-ckeditor": "file:vendor/fsuarezm/ux-ckeditor/ckeditor5/assets",
    // ...
  }
```

Add controler to assets/controllers.json

```
    "controllers": {
        // ...
        "@fsm/ux-ckeditor": {
            "ckeditor": {
                "enabled": true,
                "fetch": "lazy",
                "autoimport": {
                    "@fsm/ux-ckeditor/src/style.css": true
                }
            }
        }
    },

```

### Assets build setting
Install dependency
```bash
$ yarn install --force
```

Add ckeditor5 encore setting to webpack.config.json

See: https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/integrating-from-source-webpack.html

```javascript

const { CKEditorTranslationsPlugin } = require( '@ckeditor/ckeditor5-dev-translations' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );

// ...
// ...
Encore
    // ...
    // ...

    //>>> CKEditor configuration ###############
    .addPlugin( new CKEditorTranslationsPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'es',
        additionalLanguages: ['ca', 'en'],
        addMainLanguageTranslationsToAllAssets: true
    }))

    // Use raw-loader for CKEditor 5 SVG files.
    .addRule({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        loader: 'raw-loader'
    })

    // Configure other image loaders to exclude CKEditor 5 SVG files.
    .configureLoaderRule('images', loader => {
        loader.exclude = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/;
    })

    // Configure PostCSS loader.
    .addLoader({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        loader: 'postcss-loader',
        options: {
            postcssOptions: styles.getPostCssConfig( {
                themeImporter: {
                    themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                },
                minify: true
            } )
        }
    })
    //<<< CKEditor configuration ###############

```

## Usage

```php
namespace App\Form\Type\Documento;

use Symfony\Component\Form\AbstractType;
use FSM\Symfony\UX\CKEditor\Form\CKEditorType;

final class TemplateType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ...
            
            ->add('text', CKEditorType::class)
            
            // ...
            ;
    }

    // ...
}
```

## NOTE

This repository is based on:

https://github.com/xearts/symfony-ux-ckeditor5
https://github.com/symfony/ux-dropzone

