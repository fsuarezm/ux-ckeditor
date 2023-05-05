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

Add controler to assets/controllers.json

```
    "controllers": {
        // ...
        "@fsuarezm/ux-ckeditor": {
            "ckeditor": {
                "enabled": true,
                "fetch": "lazy",
                "autoimport": {
                    "@fsuarezm/ux-ckeditor/src/style.css": true
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
// ...
use FSM\Symfony\UX\CKEditor\Form\CKEditorType;

class CustomFormType extends AbstractType
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

### Mentions

```php
// ...
use FSM\Symfony\UX\CKEditor\Form\CKEditorType;

final class CustomFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ...      
            ->add('text', CKEditorType::class, [
                'ckeditor_options' => [
                    'mention' => [
                        'feeds' => [
                            [
                                'marker' => '@',
                                'feed' => [ '@swarley', '@john', '@marry', ...],
                            ],
                        ],
                        'feeds' => [
                            [
                                'marker' => '#',
                                'feed' => [ '#Train', '#Guitar', '#Table', ...],
                            ],
                        ]
                    ]
                ],
            ])
            // ...
            ;
    }

    // ...
}
```

#### With custom renderer defined in controller

```php
// ...
use FSM\Symfony\UX\CKEditor\Form\CKEditorType;

final class CustomFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // ...      
            ->add('text', CKEditorType::class, [
                'ckeditor_options' => [
                    'mention' => [
                        'feeds' => [
                            [
                                'marker' => '@',
                                'feed' => [ 
                                    [ 'id' => '@swarley', 'description' => 'Barney Stinson'],
                                    [ 'id' => '@john', 'description' => 'John Mosby'],
                                    [ 'id' => '@marry', 'description' => 'Marry Ann Lewis'],
                                    // ...
                                ],
                                'renderer' => true,
                            ],
                        ]
                    ]
                ],
            ])
            // ...
            ;
    }

    // ...
}
```


## Note

This repository is inspired on: https://github.com/xearts/symfony-ux-ckeditor5
