'use strict';

import {Controller} from '@hotwired/stimulus';

import Ckeditor from "./ckeditor";

export default class extends Controller {
    connect() {
        Ckeditor
            .create(this.element, this.config)
            .then(editor => {
                // console.log(Array.from( editor.ui.componentFactory.names() ))
            })
            .catch( error => {
                console.error( error );
            });
    }

    initialize() {
        if (this.data.get('language')) {
            this.config = {
                language: this.data.get('language')
            };
        }

        const pre_config = Object.assign({}, this.config);
        const config_s = this.data.get('config')
        const config = config_s ? JSON.parse(config_s) : {}
        this.config = Object.assign({}, pre_config, config)
    }
}